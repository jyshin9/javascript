//arrow function
//1. 매개변수가 있는 명명된 함수
function sum(a, b){ 
    return a + b
}
let sum2 = (a, b) => a + b

//2. 변수가 하나인 명명된 함수
function isPositive(number){ 
    return number >= 0
}
let isPositive2 = number => number >= 0

//3. 매개변수가 없는 명명된 함수
function randomNumber(){ 
    return Math.random
}
let randomNumber2 = () => Math.random

//4. 익명함수
document.addEventListener('click', function(){ 
    console.log('click')
})
document.addEventListener('click', () => console.log('click'))

/* function키워드 제거하기
함수를 변수에 지정하기
return, {} 제거 가능 / 화살표 뒤에 오는 것은 전부 반환되기 때문. */

//example
class Person{
    constructor(name){
        this.name = name
    }

    printNameArrow(){ //arrow function
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    } //print after 100ms delay

    printNameFunction(){ //normal function
        setTimeout(function(){
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let Person = new Person('Bob')
Person.printNameArrow() //Bob
Person.printNameFunction() //blank
console.log(this.name) //blank

//결론! 특별한 이유가 없다면 arrow가 굿~