// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true); 
console.log(json);

json = JSON.stringify(['apple','banana']); //배열 -> JSON
console.log(json);

const rabbit = { //rabbit Object
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    sybol: Symbol("id"),
    jump: () =>{
        console.log(`${this.name} can jump!`);
    },
};
json = JSON.stringify(rabbit); //Object -> JSON
console.log(json); 

json = JSON.stringify(rabbit, ['name','color']); //Object -> JSON. 이름만 전달
console.log(json); 

// json = JSON.stringify(rabbit, (key, value) => { //세밀하게 통제하고 싶을 때 콜백함수 사용
//     console.log(`key: ${key}, value: ${value}`);
//     return key === 'name' ? 'ellie' : value;
// });
// console.log(json);

// 2. JSON to Object 
// parse(json)
console.clear();

json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => { //JSON -> Object 
    console.log(`key: ${key}, value: ${value}`);
    return key ==='birtDate'? new Date(value):value;
}); 
console.log(obj);

rabbit.jump();
// obj.jump(); //다시 obj로부터 API를 만들면 jump라는 함수가 없음

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); //json으로 만든 birthdate는 string이기 때문에 error발생
console.log(obj.birthDate.getDate());