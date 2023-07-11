function createDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('divs');
    document.getElementsByClassName('container')[0].appendChild(newDiv);
};

for (let i = 0; i < 256; i++) {
    createDiv();
};