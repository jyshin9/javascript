const userLeft = false
const userWatchingCatMeme = false

function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name : 'User Left',
            message: ':('
        })
    } else if(userWatchingCatMeme){
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
   } else{
    callback('Thumb up and Subscribe')
   }
}

watchTutorialCallback((message)=>{
    console.log('Success: '+ message)
}, (error) => {
    console.log(error.name+' '+error.message)
})

//callback->promise
function watchTutorialPromise(){
    return new Promise((resolve, reject)=>{
        if (userLeft) {
            reject({
                name : 'User Left',
                message: ':('
            })
        } else if(userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
       } else {
        resolve('Thumb up and Subscribe')
       }
    })
}
//callback -> resolve / errorCallback -> reject

watchTutorialPromise().then((message)=>{
    console.log('Success: '+ message)
}).catch((error) => {
    console.log(error.name+' '+error.message)
})