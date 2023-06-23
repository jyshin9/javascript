//Callback Hell Example
class UserStorage{ //사용자의 데이터를 서버(백엔드)에서 받아오기
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password ==='academy')
            ){
                onSuccess(id); //콜백. 아이디 전달해줌
            } else{
                onError(new Error('not found')); //onError콜백을 부르면서 Error라는 object 생성
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){ //사용자 정보 다시 받아오기
        setTimeout(()=>{
          if(user==='ellie'){
            onSuccess({name:'ellie', role: 'admin'});
          } else{
            onError(new Error('no access'));
          }
         }, 1000);
    }
}

// 1. 사용자에게 id, password 입력받아오기
// 2. 서버에 login
// 3. login에 성공한다면 받아온 id에 role 할당
// 4. 출력

const UserStorage = new UserStorage();
const id = prompt('enter your id');
//prompt API: 화면에 dialog 띄움
const password = prompt('enter your password');
UserStorage.loginUser(
    id, 
    password, 
    (user) => { //사용자가 로그인이 되었다면
        UserStorage.getRoles(
            user, 
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${user.role},role`)
            },
            error=>{
                console.log(error);
            } 
            );
    }, 
    error => { //에러가 나면
        console.log(error);
    }
);
