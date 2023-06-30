// function 반복적으로 실행되는 로직들을 재사용하기 위하여 생성

/* const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;

function add(a, b){
    return a + b;
}

const sum = add(3, 4);
console.log(sum);
 */

function add(num1, num2){
    return num1 + num2;
}

/*function print(name, age){
    console.log(`${name} ${age}`);
}

print(8, 33);

const doSomething = add; //똑같은 함수를 가리키게 됨

const result = doSomething(2, 3);
console.log(result);
const result2 = doSomething(2, 3);
console.log(result2); */

function divide(num1, num2){
    return num1 / num2;
}

function surprise(operator){
    const result = operator(2, 3); // == divide(2, 3)
    console.log(result);
}

surprise(divide); 
//함수를 전달한다는 것은 함수를 가리키고 있는 referance가 복사되어 전달되는 것.