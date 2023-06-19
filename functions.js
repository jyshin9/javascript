// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();
  
function log(message) { //파라미터로 메세지 전달
    console.log(message);
}
log('Hello@');
log(1234); //js에는 type이 없기 때문에 숫자가 문자열로 변환되어 출력.

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
  }
  showMessage('Hi!');

  // 4. Rest parameters (added in ES6)
function printAll(...args) { //배열 전달
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  
    for (const arg of args) {
      console.log(arg);
    }
  
    args.forEach((arg) => console.log(arg));
  }
  printAll('dream', 'coding', 'ellie');
  
  // 5. Local scope
  // "밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다."
  let globalMessage = 'global'; // global variable
  function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
      console.log(message);
      let childMessage = 'hello';
    }
    // console.log(childMessage); //error
  }
  printMessage();
  
  // 6. Return a value
  function sum(a, b) {
    return a + b;
  }
  const result = sum(1, 2); // 3
  console.log(`sum: ${sum(1, 2)}`);
  
  // 7. Early return, early exit
  // bad
  function upgradeUser(user) {
    if (user.point > 10) {
      // long upgrade logic...
    }
  }
  
  // good
  function upgradeUser(user) {
    if (user.point <= 10) {
      return; //조건이 맞지 않으면 빨리 return을 하는 것이 효율적 !!
    }
    // long upgrade logic...
  }
  
  // First-class function
  // functions are treated like any other variable
  // can be assigned as a value to variable
  // can be passed as an argument to other functions.
  // can be returned by another function
  
  // 1. Function expression
  // a function declaration can be called earlier than it is defined. (hoisted)
  // a function expression is created when the execution reaches it.
  const print = function () { //함수를 선언함과 동시에 print변수에 할당
    // anonymous function 익명함수
    console.log('print');
  };
  print();
  const printAgain = print;
  printAgain();
  const sumAgain = sum;
  console.log(sumAgain(1, 3));
  
  // 2. Callback function using function expression
  function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
      printYes();
    } else {
      printNo();
    }
  }
  // anonymous function
  const printYes = function () {
    console.log('yes!');
  };
  
  // named function
  // better debugging in debugger's stack traces
  // recursions
  const printNo = function print() {
    console.log('no!');
  };
  randomQuiz('wrong', printYes, printNo);
  randomQuiz('love you', printYes, printNo);
  
  // Arrow function
  // always anonymous
  
  
  const simplePrint = () => console.log('simplePrint!');
  // const simplePrint = function () {
  //   console.log('simplePrint!');
  // };
  const add = (a, b) => a + b;
  // const add = function (a,b) {
  //    return a+b;
  // };
  const simpleMultiply = (a, b) => {
    // do something more
    return a * b; //블럭 사용 시 return을 이용해서 값을 반환해야 함.
  };
  
  // IIFE: Immediately Invoked Function Expression
  (function hello() {
    console.log('IIFE');
  })(); //바로 함수가 호출.
  
  // Fun quiz time❤️
  // function calculate(command, a, b)
  // command: add, substract, divide, multiply, remainder
  function caculate(command, a, b){
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return a-b;
        case 'divide':
            return a/b;    
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default :
             "다시생각해";
    }
    
  }
    console.log(caculate('add',1,2));
    console.log(caculate('substract',1,2));
    console.log(caculate('OMG',1,2));