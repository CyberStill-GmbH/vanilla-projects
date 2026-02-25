const bodyBackground = document.getElementsByTagName('body');
const buttonRandom = document.getElementsByClassName('btn-flipper');
const textRandomColor = document.getElementById('color-hex');
const changeBackgroundColor = document.getElementsByTagName('body')[0];

let actualColor = "";
const hexString = '0123456789abcdef';

//Generate the hexadecimal number format
function hexNumberGenerator () {
    let hexColorGenerate = '#';
    for (let i = 0; i < 6; i++) {
        const randomLetter = hexString[
        Math.floor(Math.random() * hexString.length)];
        hexColorGenerate += randomLetter;
    }
    return hexColorGenerate;
}
//Handle if the current color it's equal to the new generated and repeat again if it´s true.
function generateHexColor() {
    do {
        newColor = hexNumberGenerator();
    }while (newColor == actualColor);
    actualColor = newColor
    textRandomColor.textContent = `Your random color: ${newColor}`;
    changeBackgroundColor.style.backgroundColor = newColor;
}

buttonRandom[0].addEventListener('click', generateHexColor);



