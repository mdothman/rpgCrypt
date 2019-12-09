// Generator functions - http://www.net-comber.com/charset.html
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}
if (clipboard) {
    clipboard.addEventListener('click', () => {
        const textarea = document.createElement('textarea');
        const password = resultEl.innerText;

        if (!password) { return; }

        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Password copied to cilpboard');
    })
};
// generate event listener
if (generate) {
    generate.addEventListener('click', () => {
        const length = +lengthEl.value;
        const hasLower = lowercaseEl.checked;
        const hasUpper = uppercaseEl.checked;
        const hasNumber = numbersEl.checked;
        const hasSymbol = symbolsEl.checked;

        resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    })
};
// generateEl.addEventListener('click', () => {
//     const length = +lengthEl.value;

//     // console.log(length)
//     // console.log( typeof length);
//     const hasLower = lowercaseEl.checked;
//     const hasUpper = uppercaseEl.checked;
//     const hasNumber = numbersEl.checked;
//     const hasSymbol = symbolsEl.checked;

//     resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);


//     // console.log(resultEl);
//     // resultEl.innerText = generatePassword(
//     //     hasLower,
//     //     hasUpper,
//     //     hasNumber,
//     //     hasSymbol,
//     //     length
//     // );

// });
// generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // 1. Initiate password variable
    // 2. Filter out unchecked types
    // 3. Loop over length call generator function for each type
    // 4. Add final pwd to the pw var and return

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    // console.log("typesCount: ", typesCount);
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        item => Object.values(item)[0]
    );
    // console.log('typesArr: ', typesArr);
    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // console.log('funcName: ', funcName);
            generatedPassword += randomFunc[funcName]();
        });
    }
    // console.log(generatePassword);
    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
    const symbols = ' !@#$*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
};

// console.log(String.fromCharCode(97));
// console.log(String.fromCharCode(Math.floor((Math.random() * 26) + 97)));
// console.log(getRandomLower());
// console.log(getRandomUpper());
// console.log(getRandomNumber());







// console.log(getRandomSymbol());