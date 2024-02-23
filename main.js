
// subtract
const subtract = function(num1, num2) {
    // For UI
    let firstOperand = 0;
    let secondOperand = 0;
    let operator = '';

	return num1 - num2;
};

// multiply
const multiply = function(num1, num2) {
    // For UI
    let firstOperand = 0;
    let secondOperand = 0;
    let operator = '';

    return num1 * num2;
};

// divide
const divide = function(num1, num2) {
    // For UI
    let firstOperand = 0;
    let secondOperand = 0;
    let operator = '';

    return num1 / num2;
};

// const testInputArr = [];
let clickValue = [];
let firstNumber = 0;
let secondNumber = 0;
let operatorValue = '';

const handleClick = function(event){
    const buttonValue = event.target.value;

    testInputArr.push(buttonValue);
    // inputStorage(digitValue);
    // console.table(testInputArr);

    // const firstNumber = Number(testInputArr[0]);
    // const secondNumber = Number(testInputArr[2]);
    // operate(firstNumber, secondNumber, testInputArr[1]); // ???
}

// const inputStorage = function(){
//     // let value = handleClick();
//     // return value;
// }

// console.table(testInputArr);

const firstDigit = document.querySelector('.one')
firstDigit.addEventListener('click', () => {
    // handleClick;
    clickValue.push(firstDigit.value);
    // console.log(clickValue);
    populateDisplay();
})


const operatorPlus = document.querySelector('.plus')
operatorPlus.addEventListener('click', () => {
    // handleClick;
    clickValue.push(operatorPlus.value);
    // console.log(clickValue);
    populateDisplay();
})

const secondDigit = document.querySelector('.two')
secondDigit.addEventListener('click', () => {
    // handleClick;
    clickValue.push(secondDigit.value);
    // console.log(clickValue);
    populateDisplay();
})

const display = document.querySelector('#display');
const populateDisplay = function() {
    // Access the stored value and update the DOM
    display.textContent = clickValue;
    
}

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    firstNumber = Number(clickValue[0])
    console.log(firstNumber);
    operatorValue = clickValue[1]
    console.log(operatorValue);
    secondNumber = Number(clickValue[2])
    console.log(secondNumber);
    // operate
    operate(firstNumber, secondNumber, operatorValue)
})

// add
const add = function(num1, num2) {
    // For UI
    // let firstOperand = 0;
    // let secondOperand = 0;
    // let operator = '';

	let result = num1 + num2;
    display.textContent = result;
};


// const inputButtons = ['12', '+', '4']
// const firstNumber = Number(inputButtons[0])
// const secondNumber = Number(inputButtons[2])

// const inputButtons = ['12', '-', '4']
// const firstNumber = Number(inputButtons[0])
// const secondNumber = Number(inputButtons[2])

// const inputButtons = ['12', '*', '4']
// const firstNumber = Number(inputButtons[0])
// const secondNumber = Number(inputButtons[2])

// const inputButtons = ['12', '/', '4']
// const firstNumber = Number(inputButtons[0])
// const secondNumber = Number(inputButtons[2])

const operate = function(num1, num2, operator) {
    // Condition for calling above operations
    if (operator === '+') {
        add(num1, num2)
    }
    
    if (operator === '-') {
        return subtract(num1, num2)
    }

    if (operator === '*') {
        return multiply(num1, num2)
    }

    if (operator === '/') {
        return divide(num1, num2)
    }
}

// console.log(operate(firstNumber, secondNumber, inputButtons[1]));

// // Variable for storing display value
// let displayValue = '';
// let first = '';
// let second = '';

// // Function for populate the display
// const digits = document.querySelectorAll('.digit');

// digits.forEach(digit => {
//     digit.addEventListener('click', () => {
//         // console.log(typeof digitValue);
//         // console.log(digitValue);
//         // digitHandler(digit.value)
//         populateDisplay(digit.value)
//     })
// })


// const populateDisplay = function(value, operator){
//     displayValue += value
//     const display = document.querySelector('#display');
//     display.textContent = displayValue;

    
//     // if (first !== '') {
//     //     secondNumber(displayValue)
//     //     display.textContent = first;
//     // }
    
//     // firstNumber(displayValue)

//     // const plus = document.querySelector('.plus');
//     // plus.addEventListener('click', () => {
//     // })

//     // if (operator === '+') {
        
//     // }

// }

// // Store first number and second number
// const plus = document.querySelector('.plus');
// // console.log(plus.value);
// // console.log(plus);
// plus.addEventListener('click', () => {
//     // plus.value = '+';
//     handleClick(plus.value);
// })

// const plusHandler = function(plusValue){
//     // console.log(plusValue);
//     return "this is" + plusValue
// }

// plusHandler()

// const plusCheck = function(value) {
//     // console.log(value);
//     if (value === 1) {
//         display.textContent = 'test';
//     }
// }

// console.log(plusClick);

// const firstNumber = function(value){
    

//     first = value;
//     // console.log(first);
// }

// const secondNumber = function(value){
    

//     second = value;
//     console.log(second);
    
// }

// Utilize the operator that the user select


// call operate() when '=' is pressed