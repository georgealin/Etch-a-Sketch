function createDiv() {
    const newDiv = document.createElement('div');
    newDiv.textContent = "someee";
    document.getElementsByClassName('container')[0].appendChild(newDiv);
};

for (let i = 0; i < 256; i++) {
    createDiv();
};