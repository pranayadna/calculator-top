let clickValue = [];
let firstNumber;
let operatorValue = '';
let secondNumber = '';
let equalValue = 0;

const keysDigit = document.querySelectorAll('.key.digit');
keysDigit.forEach(keyDigit => {
    keyDigit.addEventListener('click', () => {
        handleDigit(keyDigit.value)
        populateDisplay();
    })
})

const handleDigit = function(value) {
    if (typeof firstNumber === 'undefined' || firstNumber === '0' || firstNumber === 0){
        firstNumber = '';
    } 

    if (typeof secondNumber === 'undefined' || secondNumber === '0'){
        secondNumber = '';
    } 

    if (operatorValue === '+') {
        secondNumber += value;

        if (typeof firstNumber === 'undefined' || firstNumber === '0'){
            firstNumber = '';
        }

    } else if (operatorValue === '-') {
        secondNumber += value;

        if (typeof firstNumber === 'undefined' || firstNumber === '0'){
            firstNumber = '';
        }

    } else if (operatorValue === '*') {
        secondNumber += value;

        if (typeof firstNumber === 'undefined' || firstNumber === '0'){
            firstNumber = '';
        }
    
    } else if (operatorValue === '/') {
        secondNumber += value;

        if (typeof firstNumber === 'undefined' || firstNumber === '0'){
            firstNumber = '';
        }

    } else if (operatorValue === ''){
        firstNumber += value;
    }
}

const operatorPlus = document.querySelector('.add');
const operatorMinus = document.querySelector('.subtract');
const operatorMultiply = document.querySelector('.multiply');
const operatorSubtract = document.querySelector('.subtract');

const keysOperator = document.querySelectorAll('.key.operator');
keysOperator.forEach(keyOperator => {
    keyOperator.addEventListener('click', () => {
        let valuePlus = operatorPlus.value;
        let valueMinus = operatorMinus.value;
        let valueMultiply = operatorMultiply.value;
        let valueSubtract = operatorSubtract.value;
        
        handleOperator(valuePlus, valueMinus, valueMultiply, valueSubtract)
        operatorValue = keyOperator.value;
    })
})

const handleOperator = function(valuePlus, valueMinus, valueMultiply, valueSubtract) {
    let firstNumberInput = Number(firstNumber);
    let secondNumberInput = Number(secondNumber);
    let equalPlus = 0;
    let equalMinus = 0;
    let equalMultiply = 0;
    let equalSubtract = 0;

    if (isNaN(firstNumberInput)) {
        firstNumberInput = 0;
    }

    if (operatorValue === '') {
        operatorValue = operatorPlus.value;
    }

    if (operatorValue === '+') {

        if (typeof firstNumber === 'undefined' || firstNumber === '') {
            firstNumber = equalValue;
        }

        equalPlus = operate(firstNumberInput, secondNumberInput, operatorValue);
        equalValue = equalPlus;;

        if (firstNumber && operatorValue && secondNumber) {
            resetValue();
            operatorValue = valuePlus.value;
            firstNumber = equalValue;
        }
    }

    if (operatorValue === '-') {

        if (typeof firstNumber === 'undefined' || firstNumber === '') {
            firstNumber = equalValue;
        }

        equalMinus = operate(firstNumberInput, secondNumberInput, operatorValue);
        equalValue = equalMinus;

        if (firstNumber && operatorValue && secondNumber) {
            resetValue();
            operatorValue = valueMinus.value;
            firstNumber = equalValue;
        }
    }

    if (operatorValue === '*') {

        if (typeof firstNumber === 'undefined' || firstNumber === '') {
            firstNumber = equalValue;
        }

        equalMultiply = operate(firstNumberInput, secondNumberInput, operatorValue);
        equalValue = equalMultiply;

        if (firstNumber && operatorValue && secondNumber) {
            resetValue();
            operatorValue = valueMultiply.value;
            firstNumber = equalValue;
        }
    }
    
    if (operatorValue === '/') {

        if (typeof firstNumber === 'undefined' || firstNumber === '') {
            firstNumber = equalValue;
        }

        equalSubtract = operate(firstNumberInput, secondNumberInput, operatorValue);
        equalValue = equalSubtract;

        if (firstNumber && operatorValue && secondNumber) {
            resetValue();
            operatorValue = valueSubtract.value;
            firstNumber = equalValue;
        }
    }
}

const display = document.querySelector('#display');
const populateDisplay = function() {  
    if (operatorValue === ''){
        display.textContent = firstNumber;
    } else if (operatorValue === '+') {
        display.textContent = secondNumber;
    } else if (operatorValue === '-') {
        display.textContent = secondNumber;
    } else if (operatorValue === '*') {
        display.textContent = secondNumber;
    } else if (operatorValue === '/') {
        display.textContent = secondNumber;
    } else if (equalValue) {
        display.textContent = equalValue;
    } else if (operatorValue === '=') {
        display.textContent = equalValue;
    } else  {
        display.textContent = secondNumber;
    } 
}

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    let firstNumberEqual = Number(firstNumber);
    let secondNumberEqual = Number(secondNumber);
    let operatorEqual = operatorValue;

    equalValue = operate(firstNumberEqual, secondNumberEqual, operatorEqual);

    operatorValue = equal.value;
    resetValue();

    if (firstNumber === '') {
        firstNumber = equalValue;
    }

})

const resetValue = function() {
    firstNumber = '';
    operatorValue = '';
    secondNumber = '';
}

// add
const add = function(num1, num2) {
  	let result = num1 + num2;
    display.textContent = result;

    return result;
};

// subtract
const subtract = function(num1, num2) {
    let result = num1 - num2;
    display.textContent = result;

    return result;
};

// multiply
const multiply = function(num1, num2) {
    let result = num1 * num2;
    display.textContent = result;

    return result;
};

// divide
const divide = function(num1, num2) {
    if (num2 === 0) {
        display.textContent = 'You cannot divide by 0';
        return 0;
    } 
    
    let result = num1 / num2;

    if (isFloat(result)) {
        display.textContent = result.toFixed(2);  
    } else {
        display.textContent = result;
    }

    return result;

};

function isFloat(number) {
    return !Number.isInteger(number);
}

const clearBtn = document.querySelector('.all-clear');
clearBtn.addEventListener('click', () => {
    resetValue();
    equalValue = 0;

    display.textContent = 0;

    console.log('first number: ', firstNumber);
    console.log('operator: ', operatorValue);
    console.log('second number: ', secondNumber);
    console.log('equal value: ', equalValue);
})

const operate = function(num1, num2, operator) {
    // Condition for calling above operations
    if (operator === '+') {
        return add(num1, num2)
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
    
    if (operator === '=' || operator === '') {
        return firstNumber
    }
}