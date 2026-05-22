const  randomColor = document.querySelector('.random-color');
const randomGradient = document.querySelector('.random-gradient');
const hearColorPanels = document.querySelector('main');
const colorPicker = document.querySelector('#colorPicker');
const inputColorText = document.querySelector('.input-container input[type="text"]');
const applyColorButton = document.querySelector('.apply');
const codeBackgroundActual = document.querySelector('#background-css')
const copyBackgroundCode = document.querySelector('.copy-code');
const bodyStyles = document.body;


const hexadecimalValues = [
    '0', '1', '2', '3', 
    '4', '5', '6', '7',
    '8', '9', 'a', 'b',
    'c', 'd', 'e', 'f'
];

function hexadecimalGenerator() {
    const arrHexadecimal = [];
    for (let i = 0; i < 6; i++) {
        const randomNumber = hexadecimalValues[Math.floor(Math.random() * 16)];
        arrHexadecimal.push(randomNumber);
    }
    return arrHexadecimal.join('');
};

function changeBackgroundColor()  {
    const randomColorGenerated = '#' + hexadecimalGenerator();
   
    bodyStyles.style.backgroundImage = "none";
    bodyStyles.style.backgroundColor = randomColorGenerated;
    giveBackgroundCode();
}

function changeBackgroundDegrade() {
    const color1 = '#' + hexadecimalGenerator();
    const color2 = '#' + hexadecimalGenerator();

    const randomDegrade = `linear-gradient(45deg, ${color1}, ${color2})`;
    bodyStyles.style.transition = "background 0.2s ease";
    bodyStyles.style.backgroundImage = randomDegrade;
    giveBackgroundCode();
}

function textInputBackgroundChecker(backgroundTexted) {
    if (backgroundTexted[0] !== '#' || backgroundTexted.length !== 7) {
        console.log("#?! Missed '#' or out of scope");
        return false;
    }

    for (let i = 1; i < 7; i++) {
        const isHexCharacter = hexadecimalValues.includes(backgroundTexted[i].toLowerCase());
        if (!isHexCharacter) {
            console.log("unrecognized input background code");
            return false;
        }
    }
    return true;
}

function inputTextBackgroundColor() {
    const textInput = inputColorText.value;
    const textInputCleaned = textInput.trim();
    if (textInputBackgroundChecker(textInputCleaned)) {
        bodyStyles.style.backgroundImage = 'none';
        bodyStyles.style.backgroundColor = textInputCleaned;
        giveBackgroundCode();
    } else {
        console.log("Try with a correct color code");
    }
}

function giveBackgroundCode() {
    const computedStyles = window.getComputedStyle(document.body);
    const actualGradient = computedStyles.getPropertyValue('background-image');
    const actualColor = computedStyles.getPropertyValue('background-color');
    if (actualGradient && actualGradient !== 'none') {
        codeBackgroundActual.textContent = actualGradient;
    } else {
        codeBackgroundActual.textContent = actualColor;
    }
}



randomColor.addEventListener('click', function(event) {
    changeBackgroundColor();
    console.log(event.target);
});

randomGradient.addEventListener('click', function(event) {
    changeBackgroundDegrade();
    console.log(event.target);
});

hearColorPanels.addEventListener('click', function(event) {
    if (event.target.matches('.panel-color')) {
        const stylesElement = window.getComputedStyle(event.target);
        const colorBackgroundChange = stylesElement.getPropertyValue('background-color');
        
        bodyStyles.style.backgroundImage = "none";
        bodyStyles.style.backgroundColor = colorBackgroundChange;
        giveBackgroundCode();      
    } else if (event.target.matches('.gradient-panel')) {
        const stylesElement= window.getComputedStyle(event.target);
        
        const gradientBackground = stylesElement.getPropertyValue('background-image');
        console.log("¿Qué lee en background-image?: ", gradientBackground);
        
        bodyStyles.style.background = "none"; 
        bodyStyles.style.background = gradientBackground;
        giveBackgroundCode();
    }
});

colorPicker.addEventListener('input', function(event) {
    const choosedColor = event.target.value;
    
    bodyStyles.style.backgroundImage = "none";
    bodyStyles.style.backgroundColor = choosedColor;
    
    giveBackgroundCode();
});

applyColorButton.addEventListener('click', (event) => {
    inputTextBackgroundColor();
});

copyBackgroundCode.addEventListener('click', async () => {
    try {
        const textCopied = codeBackgroundActual.innerText;
        if (textCopied !== '') {
            await navigator.clipboard.writeText(textCopied);

            copyBackgroundCode.innerText = "Copied!";

            setTimeout(() => {
                copyBackgroundCode.innerText = "Copy";
            }, 3000);
        }

    } catch(err) {
        console.error("Error while copying text: ", err);
    }
});

// First API used in my entire life... this is the begining HAHAHAH