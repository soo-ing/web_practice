'use strict'

// async & await
// 무조건 promise가 나쁘고 async & await를 사용하는 것이 더 좋고 그런 개념이 아님
// 각자 상황에 따라 용도가 다르다.

// async
// 함수 앞에 async를 붙여주면 자동적으로 promise로 실행이 된다.
async function fetchUser(){
    return 'soo';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// await
// async 함수안에서만 await 사용 가능
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
    await delay(1000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

// 만약 프로미스로 구현한다면
/*
function pickFruits(){
    return getApple()
    .then(apple=>{
        return getBanana()
        .then(banana=>`${apple}+${banana}`);
    });
}
*/

async function pickFruits(){
    const apple= await getApple();
    const banana=await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
// 2초 후에 실행됨

// 병렬처리

async function pickFruits(){
    const applePromise=getApple();
    const bananaPromise=getBanana();
    const apple= await applePromise;
    const banana=await bananaPromise;
    return `${apple} + ${banana}`;
} 

pickFruits().then(console.log);
// 1초 후에 실행됨 (각각의 함수를 동시에 따왔기 때문)


// 유용한 Promise API (간단하게 만들어줌)
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()]) // 배열 형태로 만들어줌
    .then(fruits=>fruits.join(' + '));
}

pickAllFruits().then(console.log);

// 먼저 수행되는 것 딱 하나만 호출
// 만약 getApple()이 1초, getBanana()가 2초 후에 호출된다면 getApple()만 호출
function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()]);
}

pickOnlyOne().then(console.log);