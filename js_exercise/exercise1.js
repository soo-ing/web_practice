'use strict'

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// false 출력

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
// true 출력

console.log(`value: ${symbol1.description}`);
// value: id 출력

const person={name:'sooing',age:20};
console.log(person);
// {name: 'sooing', age:20} 출력

console.log('이름은 '+person.name+' 나이는 '+person.age+'입니다.');
// 일반적인 출력

console.log(`이름은 ${person.name} 나이는 ${person.age}입니다.`);
// Template Literals을 사용한 출력

// value1 || value2 || check()
// 함수를 마지막에!

const sFive='5';
const nFive=5;

console.log(sFive == nFive);
// true 출력

console.log(sFive === nFive);
// false 출력

const person1 = { name: 'sooing' };
const person2 = { name: 'sooing' };
const person3 = person1;

console.log(person1 == person2);
//각각의 참조가 다르기때문에 false

console.log(person1 === person2);
//이 또한 참조가 다르기 때문에 false

console.log(person1 === person3);
//참조가 같기 때문에 true

function showMessage(message, from= 'unknown'){
    console.log(`${message} ${from}`);
}

showMessage('Hi');

// Hi unknown 출력

function printAll(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
}
printAll('A','B','C');

// 아래와 같이 바꿔주셔도 됩니다.

function printAll(...args){
    for(const arg of args){
        console.log(arg);
    }
}
printAll('A','B','C');

//기존 코드
function upgradeUser(user){
    if(user.point>10){
      //long upgrade logic..
    }
}

// Early return
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    //long upgrade logic..
}

//함수의 이름없이 작성해서 변수에 할당 (anonymous function)
const print = function(){
    console.log('print');
};

print();
// print 출력

const printAgain = print;
printAgain();
// print 출력

function randomQuiz(answer, printYes, printNo){
    if(answer === 'love'){
        printYes();
    }else{
        printNo();
    }
}

const printYes=function(){
    console.log('yes');
}

// named function으로 구현하였음, 이 때 정의된 함수 이름은 디버깅할 때 쓰임
const printNo=function print(){
    console.log('no');
}

randomQuiz('love',printYes,printNo);

// yes 출력

// 기존에 함수를 만들었던 방법
{
const simplePrint = function() {
    console.log('print');
}
}

// Arrow Function 1
const simplePrint = () => console.log('print');

// Arrow Function 2
const add = (a,b) => a + b;

// Arrow Function 3 (블록이 필요한 경우)
const simpleMulti = (a,b) => {
    //...
    return a * b;
}

(function simplePrint(){
    console.log('print');
})();

// 함수 선언과 동시에 호출
{
class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speak(){
        console.log('Hi');
    }
}

const person = new Person('sooing',20);
console.log(person.name);
console.log(person.age);
person.speak();
}
// sooing
// 20
// Hi
// 출력

{
class Person{

    constructor(fName,lName,age){
        this.fName=fName;
        this.lName=lName;
        this.age=age;
    }
    get age(){
        return this._age;
    }
    set age(val){
        if(val<0){
            throw Error('error');
        }
        this._age=val;
    }
}
const person = new Person('soo','ing',1);
}

// age가 0보다 작으면 에러메시지가 나오도록 설정하였기 때문에 에러 메시지 출력

class number{
    publicField=2; // 자동으로 public으로 선언
    #privateField=0; //private으로 선언
}

const num=new number();
console.log(num.publicField); // 2 출력
console.log(num.privateField); // undefined 출력

// static 사용하지 않은 경우
{
class Name{
    person='sooing';
}
const a1=new Name();
console.log(a1.person);
}

// static 사용한 경우
{
class Name{
    static person='sooing';
  
    static print(){
        console.log(Name.person);
    }
}
console.log(Name.person);
Name.print();
}

class Shape{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}

class Triangle extends Shape{
    //overriding
    draw(){
        super.draw(); //부모 메서드 불러오기
        console.log("triangle");
    }
    getArea(){
        return (this.width * this.height) / 2 ;
    }
}

const rec = new Rectangle(20,20,'blue');
const tri = new Triangle(20,20,'red');

console.log(rec.getArea()); // 400 출력

tri.draw(); // drawing red color 출력
console.log(tri.getArea()); // 200 출력

console.log(rec instanceof Rectangle); // true 출력
console.log(tri instanceof Rectangle); // false 출력
console.log(tri instanceof Triangle); // true 출력
console.log(tri instanceof Shape); // true 출력
console.log(tri instanceof Object); // true 출력 (모든 객체나 클래스는 Object에서 상속받음)