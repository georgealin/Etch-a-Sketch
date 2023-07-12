//creates <div> and append it to .container
function createDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('divs');
    document.querySelector('.container').appendChild(newDiv);
};
//default parameters
let size = 16;
for (let i = 0; i < size * size; i++) {
    createDiv();
    resizeContainer();
    changeColor();
};

function resizeContainer () {
let container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //add style to container div
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};

let color = 'red';
//it iterate on all divs and add onmouseover function to them.
//the function change backgroundColor
function changeColor () {
const coloredDiv = document.getElementsByClassName('divs');
for (let i = 0; i < coloredDiv.length; i++) {
coloredDiv[i].onmouseover = function(e) {
    if(e.buttons == 1) {
    coloredDiv[i].style.backgroundColor = color;
}};
};
};
/*Create a button for changing the squares number. it promt a value from the user. if answer is bellow 100 it calls 4 function. first to clear the div container, second to create the square divs, third to attach the css to container class and forth to attach them the event listener*/ 
let btn1 = document.getElementById('squareNumbers');
btn1.addEventListener('click', changeSize);
function changeSize() {
  let answer = prompt('Please input how many square do you want.'); 
  if (parseInt(answer) < 100) {
    size = parseInt(answer);
  clearContainer();
  for (let i = 0; i < size * size; i++) {
  createDiv();
  };
  resizeContainer();
  changeColor();
  } else {
    answer = prompt('The maximum number is 100.Please input again how many square do you want.');
    size = parseInt(answer);
  clearContainer();
  for (let i = 0; i < size * size; i++) {
  createDiv();
  };
  resizeContainer();
  changeColor();
}
}    
function clearContainer () {
    let container = document.getElementsByClassName('container');
    while(container[0].firstChild) {
    container[0].removeChild(container[0].firstChild);
    }
}

