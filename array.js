'use strict';

// 1. Declaration
const arr1 = new Array(); // 첫번째방법
const arr2 = [1, 2]; // 두번째방법

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //apple
console.log(fruits[1]); //banana
console.log(fruits[2]); //undefined
console.log(fruits[fruits.length - 1]);

console.clear(); //여태까지 출력했던 console 지우기

// 3. Looping over an array
// print all fruits
// a. for
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach(function(fruit, index, array){ //ctrl+클릭 하여 API 선언 확인하기 !!
    console.log(fruit, index, array);
}); 
// 이름이 없는 함수(anonymous function)은 arrow함수 사용가능
fruits.forEach((fruit, index) => console.log(fruit, index)); 

// 4. Addition, deletion, copy
// push: add an item to the end //끝에서부터 추가
fruits.push('strawberry','peach'); 
console.log(fruits);

// pop: remove an item from the end //끝에서부터 삭제
fruits.pop(); 
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning //앞에서부터 추가
fruits.unshift('strawberry','lemon');
console.log(fruits);

// shift: add an item to the end //끝에서부터 추가
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push -> 뒤에서부터 넣고빼는 push는 넣고빼고 하면 끝이기 때문에 간단.
// 앞에서 데이터를 넣고 빼는 shift, unshift는 원래 앞에 있던 데이터들의 위치를 변화시키기 때문에 느림.
// 중간에 있는 데이터를 조작하는 것도 index를 사용하면 되기 때문에 쉽지만, 데이터 전체를 움직이게 되면 느려짐.
// splice: remove an item by index position
fruits.push('strawberry','peach','lemon');
console.log(fruits);

// fruits.splice(1); //원하는 index를 지정하여 전달 -> index 1 이후 배열 모두 삭제됨
fruits.splice(1,1); //(시작 index, 적용 갯수)
console.log(fruits);
fruits.splice(1,1,'apple','lemon'); //삭제한 자리에 apple과 lemon 삽입.
console.log(fruits);

// concat: combine two arrays 2개의 배열을 하나로 묶음.
const fruits2=['pair','coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// fing the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple')); //사과의 인덱스 값? 0
console.log(fruits.indexOf('lemon')); //레몬의 인덱스 값? 2
console.log(fruits.indexOf('coconut')); //코코넛의 인덱스 값? -1

// includes
console.log(fruits.includes('watermelon')); //수박이 있음? false
console.log(fruits.includes('peach')); //복숭아가 있음? true

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); //처음 등장하는 사과의 index
console.log(fruits.lastIndexOf('apple')); //마지막에 등장하는 사과의 index