// async & await
// clear style of using promise :)

// 1. async
function fetchUser(){
    // do network request from backend in 10 secs.....
    return 'ellie';
}

const user = fetchUser(); //함수 호출 10초 후 console찍힘
console.log(user);

// 1-1. method 1: Promise
function fetchUser(){
    return new Promise((resolve, reject)=>{
        resolve('ellie');
    });
}

const user2 = fetchUser();
user2.then(console.log);
console.log(user2);

// 1-2. method 2: async
async function fetchUser(){
    return 'ellie';
}

const user3 = fetchUser(); 
user3.then(console.log);
console.log(user3);

// 2. await
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
    //정해진 ms가 지나면 resolve를 호출하는 promise return
}

async function getApple(){
    await delay(3000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

function getBanana(){
    return delay(1000);
    return 'banana';
}

async function pickFruits(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful APIs
function pickAllFruits(){
    //promise배열을 전달하면 모든 요소들이 병렬적으로 모임
    return Promise.all([getAppel(),getBanana()])
    .then(fruits => fruits.join(' + ')
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    // 전달받은 배열 중에서 가장먼저 값을 반환하는 것만 반환
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);