'use strict'

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const soo={name:'sooing',age:20};

print(soo);

soo.hasJob=true;
console.log(soo.hasJob);

delete soo.hasJob;
console.log(soo.hasJob);

console.log(soo.name);
console.log(soo['name']); // string타입으로 지정해서 받아오기

function printValue(obj, key){
    console.log(obj[key]); // 정상 출력 ()
    console.log(obj.key); // undefined 출력 key라는 property가 존재하지 않기 때문
}
printValue(soo,'name');

const person1={name:'bob', age:2};

function makePerson(name,age){
    return{
        name,
        age
    };
}
const person2=makePerson('soo',21);
console.log(person2);

//Constructor function
function Person(name,age){
    this.name=name;
    this.age=age;
}

const person3=new Person('ace',23);
console.log(person3);

console.log('name' in soo);

console.clear();

//for in
for(const key in soo){
    console.log(key);
}

//for of
const array=[1,2,4,5];
for(const value of array){
    console.log(value);
}

const user={name:'soo',age:20};
const user2=user; 
user2.name='code';
console.log(user);
// 같은 object를 참조하기 때문에 둘 다 바뀝니다.

// old way
const user3={};
for(const key in user){
    user3[key]=user[key];
}
console.log(user3);

// new way
const user4={};
Object.assign(user4,user);
// conset user4=Object.assign({},user);
console.log(user4);

//another example
const fruit1={color:'red'};
const fruit2={color:'blue',size:'big'};
const mixed=Object.assign({},fruit1,fruit2);
console.log(mixed.color+' '+mixed.size);
// 뒤에있는 것으로 계속해서 덮어씌워집니다.
// 만약 black의 fruit3이 뒤에 더 붙는다면 color는 black으로 덮어씌워집니다.

//배열 선언
const arr=[1,2];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}



for(let num of arr){
    console.log(num);
}
console.clear();
/*
arr.forEach(function(arr,index,array){
    console.log(arr,index,array);
})
*/
arr.forEach((arr)=>console.log(arr));

//뒤에 넣기
arr.push(3);
console.log(arr);

//뒤에서 빼기
arr.pop();
console.log(arr);

//앞에서 넣기
arr.unshift(3);
console.log(arr);

//앞에서 빼기
arr.shift();
console.log(arr);

//shift와 ushift는 push와 pop보다 느리다

//지정된  인덱스에서 지우기
arr.push(3,4,5);
console.log(arr);

arr.splice(1,2);
console.log(arr); // [1,4,5] 출력
arr.splice(1,1,6,7); 
console.log(arr); // [1,6,7,5] 출력 (지운다음에 넣기)

const arr2=[8,9];
const newArr=arr.concat(arr2);
console.log(newArr);

// 검색
console.clear();
console.log(arr); // [1,6,7,5] 출력
console.log(arr.indexOf(1)); //0 출력 (만약 없으면 -1 출력)
console.log(arr.includes(5)); //true 출력 (없다면 false 출력)

//같은 값 중에 가장 마지막 index에 있는 것을 찾기
arr.push(1);
console.log(arr); // [1,6,7,5,1] 출력
console.log(arr.lastIndexOf(1)); // 4 출력

console.clear();
//유용한 API들

//배열을 string으로 변환하기
{
const fruits=['apple','banana','orange'];
const result=fruits.join(); //join 안에는 구분자를 넣어도 됨 ex.('-')
console.log(result);
}
//string을 배열로 변환하기
{
const fruits='1,2,3,4';
const result=fruits.split(',');
console.log(result);
}

//배열 거꾸로하기
{
const array=[1,2,3,4,5];
const result=array.reverse();
console.log(array);
console.log(result); // 둘다 reverse 적용이 된다.
}

// 몇가지 요소를 제거하고 새로운 배열 만들기
{
const array=[1,2,3,4,5];
const result=array.slice(2,5);
console.log(result); // [4,5] 출력
console.log(array); //기존 array는 그대로
}

// 90점인 학생 찾기
class Student {
constructor(name,age,enrolled,score){
    this.name=name;
    this.age=age;
    this.enrolled=enrolled;
    this.score=score;
}
}
const students=[
    new Student('A',29,true,45),
    new Student('B',28,false,90)
];
{
const result=students.find((student)=>student.score===90
    //true가 되면 find가 종료됨
);
console.log(result);
}

//수업에 등록된 학생들만 찾아서 배열로 만들기
{
const result=students.filter((student)=> student.enrolled);
console.log(result);
}
// 점수만 들어있는 새로운 배열 만들기
{
const result= students.map((student)=>student.score);
console.log(result);
}

// 점수가 50점보다 낮은 학생이 있는지 확인하기

console.clear();
{
const result1=students.some((student)=>student.score<50);
console.log(result1); // true인 학생이 있는지

const result2=students.every((student)=>student.score<50);
console.log(result2); // 모든 학생이 true인지
}
// 학생들의 평균점수 구하기
{
const result=students.reduce((prev,curr)=>prev+ curr.score,0);
console.log(result/students.length);
//reduceRight은 배열을 거꾸로 돌면서 확인하는 것
}
//학생들의 모든 점수를 string으로 변환하기
{
const result=students.map((student)=>student.score).join();
console.log(result);
//map과 join 섞기
}

//응용
{
const result=students.map((student)=>student.score).filter((score)=>score>50).join();
console.log(result);
}

//학생들의 점수를 정렬하고 string으로 변환하기
const result= students.map((student)=>student.score).sort((a,b)=>b-a).join();
console.log(result);