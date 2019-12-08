// Generator functions - http://www.net-comber.com/charset.html
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("lenth");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};
// generate event listener
generateEl.addEventListener('click', () => {
    const length = +lengthEl.nodeValue;

    // console.log(length)
    // console.log( typeof length);
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    console.log(hasLower, hasUpper, hasNumber, hasSymbol);
    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasNumber,
        hasSymbol,
        length
    );
});
// generate password function
function generatepassword(lower, upper, number, symbol, length) {
    // 1. Initiate password variable
    // 2. Filter out unchecked types
    // 3. Loop over length call generator function for each type
    // 4. Add final pwd to the pw var and return

    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    console.log("typesCount: ", typesCount);
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[o]);
    console.log('typesArr: ', typesArr);
    if (typesCount === 0) {
        return '';
        for (let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0];
                console.log('funcName: ', funcName);
                generatedPassword += randomFunc[funcName]();
            })
        }
        console.log(generatePassword);
    }
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

console.log(String.fromCharCode(97));
console.log(String.fromCharCode(Math.floor((Math.random() * 26) + 97)));
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());







// console.log(getRandomSymbol());