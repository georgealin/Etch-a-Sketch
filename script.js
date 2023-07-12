//creates <div> and append it to .container
function createDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('divs');
    document.querySelector('.container').appendChild(newDiv);
};

let size = 32;
for (let i = 0; i < size * size; i++) {
    createDiv();
};

let container =document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //add style to container div
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let color = 'red';
//it iterate on all divs and add onmouseover function to them.
//the function change backgroundColor 
const coloredDiv = document.getElementsByClassName('divs');
for (let i = 0; i < coloredDiv.length; i++) {
coloredDiv[i].onmouseover = function(e) {
    if(e.buttons == 1) {
    coloredDiv[i].style.backgroundColor = color;
}};
}

