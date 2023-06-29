//Callback Hell Example
class Userstorage{
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                    (id==='ellie'&&password==='dream')||
                    (id==='coder'&&password==='academy')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found')); //만약 실패를 한다면 reject를 통하여 error전달
                }
            }, 2000);
        });
    }
    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(user==='ellie'){
                    resolve({name:'ellie',role:'admin'})
                }else{
                    reject(new Error('no access'));w
                }
            }, 1000);
        });
    }
 async getUserWithRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
     return role;
    }
}

const userStorage = new Userstorage(); //object 선언
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
    .loginUser(id, password)
    .then(user = userStorage.getRoles) //잘된다면 user를 받아와서 userStorage 속 getRoles함수 호출
    .then(user => alert(`Hello ${user.name}, you have a ${user.role}`)) //모든게 다 성공한다면 최종적으로 받아오는 user를 이용하여 수행
    .catch(console.log);