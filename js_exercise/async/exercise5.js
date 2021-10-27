'use strict'

// 프로미스는 클래스이기때문에 new 키워드 사용
// 네트워크 통신이나 파일 불러오는것은 비동기로 처리하는 것이 좋음
// 새로운 프로미스가 만들어지면, executor가 자동적으로 실행된다.
// 이것은 내가 의도하지 않았는데도 실행될 수도 있음, 이 점 염두하기
// 1. Producer
const promise = new Promise((resolve,reject)=>{
    console.log('doing something..');
    setTimeout(()=>{
        resolve('soo');
        //reject(new Error('no network'));
    },2000);
});

// 2. Consumers : then, catch, finally
promise
.then((value)=>{
    console.log(value);
}) // then만 넣은 uncaught 에러 발생
.catch((error)=>{
    console.log(error);
}) // catch도 넣어주어야 더이상 uncaught 에러가 발생하지 않음
.finally(()=>{
    console.log('finally');
}) //성공하든 실패하든 마지막으로 실행하고 싶을 때 finally 사용

// 3. Promise chaining
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=> resolve(1),1000);
});

fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
// then은 값을 바로 전달해도 되지만 promise에 전달해도 된다.
return new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(num-1),1000);
    })
})
.then(num=> console.log(num));

// 4. Error Handling

const getHen=()=>
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('chicken'),1000);
    });

const getEgg = hen =>
    new Promise((resolve,reject)=>{
        setTimeout(()=>reject(new Error(`${hen}=>egg`)),1000);
    });

const cook = egg =>
    new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(`${egg}=>cook`),1000);
    });

getHen()
.then(hen=>getEgg(hen))
.catch(error=>{
    return 'bread';
})
.then(egg=>cook(egg))
.then(meal=>console.log(meal))
//chicken=>egg=>cook 출력

/*
getHen()
.then(getEgg)
.then(cook)
.then(console.log);
*/
// 이렇게 생략 가능

class UserStorage{
    loginUser(id, password){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                //백엔드가 없기 때문에 timeout으로 예제
                if(
                    (id === 's1' && password === '1')||
                    (id === 's2' && password === '2')
                ){
                    resolve(id);
                }else{
                    reject(new Error('not found'));
                }
    
            },2000);
        });   
    }

    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user==='s1'){
                    resolve({name:'s1',role:'admin'});
                }else{
                    reject(new Error('no access'));
                }
            },1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
.loginUser(id,password)
.then(userStorage.getRoles)
.then(user=> alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);