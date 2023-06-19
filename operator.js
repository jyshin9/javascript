// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2); //숫자가 문자열로 변환.
console.log(`string literals: 1+2=${1+2}`);

console.log("ellie\'s book");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; //선업뎃 후할당
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; //선할당 후업뎃
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x=x+y;
x -+ y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10<6); // less than
console.log(10<=6); // less than or equal
console.log(10>6); // greater than
console.log(10<6); // less than

// 6. Logical operators : || (or), && (and), !(not)
const value1 = false;
const value2 = 4<2; //false

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); 
//or연산은 하나라도 true면 멈춤 ex)value1이 true면 value2와 check값은 보지도 않고 멈춤(야 게임 끝남 나는 true야.) -> true를 반환.
//check()와 같은 제일 무거운 함수를 뒤에다 배치하는 것이 효율적. 

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
//and연산은 하나라도 false면 멈춤 

// often used to compress long if-statement
// nullableObject && nullableObject.something

// ! (not)
console.log(!value1);

function check(){
    for(let i=0;i<10;i++){
        //wasting time
        console.log('*');
    }
    return true;
} //check: true를 return

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose wquality, with type conversion //타입 신경 안씀
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict wquality, no type conversion //타입 신경 씀 -> 지향하기
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true, ellie1이 가지고 있는 reference value를 ellie3으로 할당

// equality - puzzler
console.log(0 == false); // true. 타입이 같다고 인식하기 때문
console.log(0 === false); // false. 0은 number, false는 boolean이기 때문
console.log('' == false); // true
console.log('' === false); //false. empty문자열('')은 boolean type이 아님.
console.log(null == undefined); //true.
console.log(null === undefined); //false. 둘은 다른 type.

// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');
//true면 ?다음실행 false면 :다음실행

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition. 블럭을 실행한 후에 while을 검사
do {
    console.log(`do while: ${i}`);
    i--;
  } while (i > 0);
// 블럭을 실행하고 싶으면 do-while, 그냥 하고 싶으면 while

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
  }
  
for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration 블럭안에 지역변수 선언
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(`i: ${i}, j:${j}`);
    }
  }
  
// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
  for(let i=0;i<10;i++){
    if(i%2==0) 
        console.log(`Q1. ${i}`);
    else
        continue;
  }
  
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
  for(let i=0; i<10;i++){
    console.log(`Q2. ${i}`);
    if(i==8)
        break;
    else
        continue;
  }