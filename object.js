'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
// const name = 'ellie';
// const age = 4;
// print(name, age);
// function print(name, age){
//     console.log(name);
//     console.log(age);
// }

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const ellie = { name: 'ellie', age: 4 };
// 괄호를 이용하여 object 생성 가능
print(ellie);

ellie.hasJob = true; // 뒤늦게 추가도 가능. 하지만 이런식으로 너무 동적으로 코딩을 하게 되면 나중에 유지보수가 힘듦 & 생각지도 못한 error 발생
console.log(ellie.hasJob);

delete ellie.hasJob; // 삭제도 가능.
console.log(ellie.hasJob);

// 2. Computed properties []
// key should be always string *키는 항상 string type
console.log(ellie.name); // 1) 코딩하는 순간 key에 해당하는 값을 받아오고 싶을 때 사용
console.log(ellie['name']); //반드시 string type로 할 것 2) 코딩하면서 실시간으로 key을 받아오고 싶을 때 사용
ellie['hasJob']=true;
console.log(ellie.hasJob);

function printValue(obj, key){
    // console.log(obj.key); -> undefined. object에 key라는 property 존재 X
    console.log(obj[key]); // computed properties를 사용해야 함.
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = makePerson('ellie', 30);

console.log(person4);

/* function makePerson(name, age){ 
    return {
        name: name, // object = { key: value }
        age, //key와 value 값이 같으면 하나 생략 가능
    };
} */

// 4. Constructor Function
function Person(name, age){ 
    // 순수 object를 생성하는 함수는 보통 대문자로 시작.
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
} 

// 5. in operator: property existence check (key in obj)
// 해당하는 key가 object 안에 있는지 확인 -> T/F
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random); //undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie){ //블럭을 돌 때마다 ellie가 key라는 지역변수에 할당.
    console.log(ellie.random);
} //모든 key들을 출력

// for (value of iterable)
const array = [1,2,4,5];
for(value of array){ //배열 안의 모든 값들을 출력
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...]) <-정답
const user = { name : 'ellie', age : '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // user name이 ellie에서 coder로 변경됐음을 확인 가능.

//old way
const user3 = {}; //텅 빈 object
for (key in user) { 
    user3[key]=user[key]; //수동 할당
} //user3 object에 user object를 복제
console.clear(); //이전 출력 log 지움
console.log(user3);

const user4 = {};
Object.assign(user4, user); //assign(복사장소, 복사대상)
//Object: js에 있는 기본적으로 탑재되어있는 object 중 하나.
//js에 있는 모든 object(ex. user3)는 이 Object를 상속함.
//const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
//color는 둘의 공통 property
const mixed = Object.assign({}, fruit1, fruit2);
// 더 뒤에 나오는 property가 앞의 값을 덮어씌움.
console.log(mixed.color); //blue
console.log(mixed.size); //big
