/*
const container = document.querySelector('.container');
maxWidth=520;

function changeColor(){
    this.style.backgroundColor="black";
}

function drawGrid(size){
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            div= document.createElement('div');
            div.classList.add('subDiv');
            div.style.width=(parseFloat(container.style.width.slice(0,3))/n-(n*1/16*3)).toString()+"px";
            console.log(div.style.width);
            div.style.height=(parseFloat(container.style.height.slice(0,3))/n-(n*1/16*3)).toString()+"px";
            console.log(div.style.height);
            //div.textContent=j.toString()
            container.appendChild(div);
            const sub = document.querySelectorAll('.subDiv');
            sub.forEach((s) => s.addEventListener("mouseover", changeColor));
        }
    }
  }
}
drawGrid(16)

const btn = document.createElement('button');

btn.textContent="Reset";

function reset(){
    const sub = document.querySelectorAll('.subDiv');
    sub.forEach((s) => s.style.backgroundColor="white")
}

btn.addEventListener("click", reset)

body=document.querySelector('body');
body.appendChild(btn);

//grid
const btnGrid = document.createElement('button');

btnGrid.textContent="New Grid?";

function newGrid(){
    selection=prompt("Choose a new number as a the new size for the square shape of the grid!");
    if(selection < 1 || selection >100){
        newGrid();
        return;
    }
    const sub = document.querySelectorAll('.subDiv');
    sub.forEach((s) => container.removeChild(s));
    drawGrid(selection);
}

btnGrid.addEventListener("click", newGrid)

body.insertBefore(btnGrid, container);
*/
const gridContainer = document.querySelector("#grid-container");
const magicButton = document.querySelector("#magic-button");
const gameReset = document.querySelector("#game-reset");
const maxWidth = 400;

window.addEventListener('load', makeBlocks);

let size = 16;

function makeBlocks() {
  for (let i = 0; i < size; i++) {
    let row = document.createElement('div');
    row.className = "row";
    for (let j = 0; j < size; j++) {
      let box = document.createElement('div');
      box.className = "box";
      row.appendChild(box);
    }
    document.getElementById('grid-container').appendChild(row);
    gridContainer.addEventListener("mouseover", changeColor);
    var boxes = document.getElementsByClassName("box");
    for (k = 0; k < boxes.length; k++) {
      boxes[k].style.width = maxWidth / size + "px";
      boxes[k].style.height = maxWidth / size + "px";
    }
  }
}

function changeColor(e) {
  const Color1 = Math.floor(Math.random() * 256);
  const Color2 = Math.floor(Math.random() * 256);
  const Color3 = Math.floor(Math.random() * 256);
  e.target.style.backgroundColor = `rgb(${Color1}, ${Color2}, ${Color3})`;
}

magicButton.addEventListener("click", changeSize);

function changeSize() {
  let newSize = prompt("Enter desired grid size from 1 to 100");
  let desiredValue = parseInt(newSize);
  if (desiredValue > 1 && desiredValue <= 100) {
    size = newSize;
    clearGrid();
    makeBlocks();
  } else {
    alert("Enter a digit from 1-100 range!");
  }
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}

function resetGame() {
  gameReset.addEventListener('click', () =>
    location.reload());
}

resetGame();