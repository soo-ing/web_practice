'use strict'

// Shorthand Property names
const soo1={
    name: 'soo',
    age: '20'

};

const name= 'soo'
const age='18'

const soo2={
    name,
    age
};

console.log(soo1,soo2);

// Destructuring assignment
{
const student={
    name:'soo',
    level:1
};

const { name, level } =student;
console.log(name,level);

// 새로운 변수로도 할당 가능
const{name: name1, level: level1}=student;
console.log(name1,level1);
}

// 배열에도 이런식으로 접근 가능
const animal=['1','2'];

const [first,second]=animal;
console.log(first,second);


// Spread Syntax

// 배열 복사
const obj1={key: 'key1'};
const obj2={key:'key2'};
const array=[obj1,obj2];

const arrayCopy=[...array]; // 각각 낱개로 복사해오기

console.log(array,arrayCopy);

// 추가할 수도 있음
const arrayCopy2=[...array, {key:'key3'}];
//obj1.key='newKey';
console.log(arrayCopy2);
// 주소를 참조값으로 불러오기 때문에 하나의 오브젝트를 변경해도 모두 변경된다.

// 오브젝트의 값을 복사할 수도 있음
const obj3={...obj1};
console.log(obj3);

// 병합도 가능
{
const num1=[1,2];
const num2=[3,4];
const number=[...num1,...num2];
console.log(number);
}
// 오브젝트 덮어씌우기도 가능
const num1={num:1};
const num2={num:2};
const num={...num1,...num2};
console.log(num);

// Default Parameters

function printMessage(message='default message'){
    console.log(message);
}

printMessage('hello');
printMessage();

// Ternary Operator

const isCat= true;
const component=isCat? '1':'2';
console.log(component);

// Optional Chaining
const person1={
    name:'soo',
    job:{
        title:'S/W',
        manager:{
            name:'bob'
        }
    }
};

const person2={
    name:'bob'
}
/*
function printManager(person){
    console.log(
        person.job
            ? person.job.manager
                ? person.job.manager.name
                : undefined
            : undefined
    );
}
*/

function printManager(person){
    console.log(person.job?.manager?.name);
}

printManager(person1);
printManager(person2);


// Nullish Coalescing Operator
// 변수에 or연산자를 넣어서 앞에있는 값이 false면 뒤에 있는 값을 사용한다.
{
const name= 'soo';
const userName= name||'guest';
console.log(userName);
}

{
const name=null;
const userName=name||'guest';
console.log(userName);
}
// 이런식으로 작성하면 0이 들어가거나 문자열이 비어있는 경우에도 뒤에 있는 것을 출력하기 때문에 원하는 결과를 출력하기 힘듬
// ex) '', 0

// 원하는 값이 없다면 뒤에 있는 것을 출력하도록하는 코드가 필요함
{
const name='';
const userName=name??'guest';
console.log(userName); // 아무것도 출력하지 않음

const num=0;
const message=num??'undefined';
console.log(message); // 0 출력
}