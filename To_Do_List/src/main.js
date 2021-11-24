'use strict'

const enterButton =  document.querySelector('.enter');
const input = document.querySelector('.userInput');
const list = document.querySelector('.list');
let cnt=1;
enterButton.addEventListener('click',clickButton);

function clickButton(){
    let temp = document.createElement('li');
    temp.setAttribute("class", "list_item");
    temp.setAttribute("id","li"+cnt);
    temp.innerHTML = input.value;
    temp.innerHTML += `<button class="remove" onClick="removeButton(${cnt})">삭제 </button>`;
    list.appendChild(temp);
    cnt++;
}

function removeButton(cnt){
    let li = document.getElementById('li'+cnt);
    list.removeChild(li);
}