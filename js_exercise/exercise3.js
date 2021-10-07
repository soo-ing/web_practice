'use strict'

// object to JSON
let json = JSON.stringify(true);
console.log(json);
// true 출력

json=JSON.stringify(['apple','banana']);
console.log(json);
//["apple","banana"] 출력

const rabbit={
    name: 'tori',
    color:'white',
    birth: new Date(),
    jump: () => console.log("can jump")
}
json=JSON.stringify(rabbit);
console.log(json);

json=JSON.stringify(rabbit,['name']);
console.log(json);

json=JSON.stringify(rabbit,(key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key==='name'?'soo' : value;
});
console.log(json);

//JSON to Object
console.clear();

json=JSON.stringify(rabbit);
console.log(json);

const obj=JSON.parse(json,(key,value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key==='birth'? new Date(value): value;
});

console.log(obj.birth); 
console.log(obj);
rabbit.jump();
// obj.jump(); 오류

console.log(rabbit.birth.getDate());
console.log(obj.birth.getDate()); 