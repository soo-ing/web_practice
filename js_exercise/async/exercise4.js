'use strict'

//자바스크립트는 hoisting된 후에 코드가 순서대로 실행된다 (동기적이다)
// hoisting 이란 var나 function 선언들이 자동적으로 맨 위로 올라가는 것
//비동기적인건 순서대로 실행되는게 아님

//동기적인 예 (Synchronous)
console.log('1');
console.log('2');
console.log('3');

console.clear()
// 비동기적인 예 (Asynchronous)
console.log('1');
setTimeout(()=>console.log('2'),1000);
console.log('3');

//Syncronous Callback
function printImmadiately(print){
    print()
}
printImmadiately(()=>console.log('hello'));


//Asynchronous Callback
function printWithDelay(print,timeout){
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'),2000);

//콜백을 너무 많이 사용하면 좋지않음 (콜백지옥)
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
           //백엔드가 없기 때문에 timeout으로 예제
            if(
                (id === 's1' && password === '1')||
                (id === 's2' && password === '2')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }

        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user==='s1'){
                onSuccess({name: 's1', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id,password,
    user=>{
        userStorage.getRoles(user, userWithRole=>{
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        }, (error)=>{console.log(error);

        })
    },
    error=>{console.log(error)}   
);
//가독성이 떨어지고 비즈니스 로직을 확인하기 어렵고 오류 발생 시 어디서 오류가 발생했는지 쉽게 알 수 없음