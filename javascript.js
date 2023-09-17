const container = document.querySelector('.container');


for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        div= document.createElement('div');
        div.classList.add('subDiv');
        //div.textContent=j.toString()
        container.appendChild(div);
    }
}

const sub = document.querySelectorAll('.subDiv');

function changeColor(){
    this.style.backgroundColor="black";
}

sub.forEach((s) => s.addEventListener("mouseover", changeColor));

const btn = document.createElement('button');

btn.textContent="Reset";

function reset(){
    sub.forEach((s) => s.style.backgroundColor="white")
}

btn.addEventListener("click", reset)

body=document.querySelector('body');
body.appendChild(btn);