// number, string, boolean, null, undefined

// primitive data type
let number = 2;
let number2 = number; //number을 그대로 복사
console.log(number); //2
console.log(number2); //2

number2 = 3;

console.log(number); //2
console.log(number2); //3

// object
let obj = { //key-value로 구성
    name: 'ellie',
    age: 5,
};

console.log(obj.name);

let obj2 = obj; //변수 안에 있는 주소값이 복사되어 들어옴
console.log(obj2.name); //동일

obj.name = 'james'; //변경
console.log('------');
console.log(obj.name);
console.log(obj2.name); //james로 동일

let a = 2;
a = 5;
a = 9;

const num = 2;
//num = 4; error. 값 변경 불가능

const object = {
    name: 'jy',
    age: 22,
};
/* const object = {
    name: 'sjy',
    age: 20,
}; */ //이런 식으로 object 자체 ref 변경 불가 

//but, object가 가리키고 있는 ref 내부 내용은 변경 가능
obj.name = 'sjy';
obj.age = 20 ;
