//promise
let p = new Promise((resolve, reject)=>{
    let a = 1 + 1
    if(a == 2){
        resolve('Success')
    } else{
        reject('Failed') //원하는 모든 것을 reject로 다시 전달할 수 있음
    }
})

p.then((message)=>{
    console.log('This is in the then ' + message)
}).catch((messge)=>{
    console.log('This is in the catch' + message)
})
