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
    changeTextSize();
};

function resizeContainer () {
    let container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //add style to container div
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
};

let color = 'gray';
//it iterate on all divs and add onmouseover function to them.
//the function change backgroundColor
function changeColor () {
    const coloredDiv = document.getElementsByClassName('divs');
    for (let i = 0; i < coloredDiv.length; i++) {
        coloredDiv[i].onmouseover = function(e) {
            if(e.buttons == 1) {
                coloredDiv[i].style.backgroundColor = 'gray';
            }
        };
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
    changeTextSize();
  } else {
    answer = prompt('The maximum number is 100.Please input again how many square do you want.');
    size = parseInt(answer);
    clearContainer();
    for (let i = 0; i < size * size; i++) {
        createDiv();
    };
    resizeContainer();
    changeColor();
    changeTextSize();
}
};

function clearContainer () {
    let container = document.getElementsByClassName('container');
    while(container[0].firstChild) {
        container[0].removeChild(container[0].firstChild);
    }
}
// add button to empty the containerelement
let emptyButton =  document.getElementById('emptyButton');
emptyButton.addEventListener('click', function () {
    clearContainer();
    for (let i = 0; i < size * size; i++) {
        createDiv();};
        resizeContainer();
        changeColor();
    }
);
//for eraser button, to erase a single div
function erase () {
    const erasedDiv = document.getElementsByClassName('divs');
    for (let i = 0; i < erasedDiv.length; i++) {
        erasedDiv[i].onmouseover = function(e) {
            if(e.buttons == 1) {
            erasedDiv[i].style.backgroundColor = "";
            }
        };
    };
};

const eraserButton = document.getElementById('eraserButton');
eraserButton.addEventListener('click', erase);
const grayButton = document.getElementById('grayButton');
grayButton.addEventListener('click', changeColor);


//function to retrieve  value of hexCharacters at index
const hexCharacters = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
function getCharacter(index) {
    return hexCharacters[index]
};

//generate a random color
function generateNewColor() {
    let hexColorRep = '#';
    for (let index = 0; index < 6; index++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColorRep += getCharacter(randomPosition)
    }
    return hexColorRep
};

const rainbowButton = document.getElementById('rainbowButton');
rainbowButton.addEventListener('click',changeRainbow);

//change how the divs will be colored when they are mouseover. color variable is assigned after if to get different colors for divs
function changeRainbow () {
    
    const coloredDiv = document.getElementsByClassName('divs');
    for (let i = 0; i < coloredDiv.length; i++) {
        coloredDiv[i].onmouseover = function(e) {
            if(e.buttons == 1) {
                color = generateNewColor();
                coloredDiv[i].style.backgroundColor = color;
            };
        };
    };
}

function changeTextSize () {
    const squareSize = document.getElementById('squareSize');
    squareSize.textContent = `${size} X ${size}`
}
//change the number of divs with range slider
let range = document.getElementById('sizeBar');
range.addEventListener('input', function() {
    size = this.value;
    clearContainer();
    for (let i = 0; i < size * size; i++) {
        createDiv();
    };
    resizeContainer();
    changeColor();
    changeTextSize();
});

//change color with an input color
let colorPick = document.getElementById('pickColor');
colorPick.addEventListener('input', function(){
    color = this.value;
    const coloredDiv = document.getElementsByClassName('divs');
    for (let i = 0; i < coloredDiv.length; i++) {
        coloredDiv[i].onmouseover = function(e) {
            if(e.buttons == 1) { 
                coloredDiv[i].style.backgroundColor = color;
            };
        };
    };
})