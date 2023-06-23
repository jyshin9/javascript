'use strict'

// Promise is a Javascript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// When new promise is created, the executor runs automatically(★★★★★)
const promise = new Promise((resolve, reject) => { //Promise는 class이기 때문에 new라는 키워드 사용.
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(()=>{
        // resolve('ellie');
        reject(new Error('no network')); //Error 클래스는 js에서 제공.
    }, 2000);
}); 

// 2. Consumer: then, catch, finally
promise 
.then((value) => { //값이 정상적으로 잘 수행이 된다면(then) value값을 받아옴.
    console.log(value);
})
.catch((error) => { //에러가 발생하였을 시 콜백함수
    console.log(error);
})
    // chaining: then이 promise를 불러오고 promise는 catch를 불러옴
.finally(()=>{ //성공.실패 여부에 관계 없이 무조건 마지막에 실행.
    console.log('finally');
});

// 3. Promise chaining
// promise는 resolve와 reject라는 콜백함수를 받는 executor라는 콜백함수를 전달해줘야함.
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2) //2
.then(num => num * 3) //6
.then(num =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num -1), 1000); //5
    });
})
.then(num => console.log(num)); //최종 출력 5, 2초 소요

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch(error=>{
    return 'bread'; // 54번째 줄의 error를 처리하기 위함.
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
/* getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal)); */