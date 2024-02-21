// add
const add = function(num1, num2) {
    // For UI
    let firstOperand = 0;
    let secondOperand = 0;
    let operator = '';

	return num1 + num2;
};

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

const operate = function(num1, num2, operator) {
    // Condition for calling above operations
    if (operator === '+') {
        add(num1, num2)
    }
    
    if (operator === '-') {
        subtract(num1, num2)
    }

    if (operator === '+') {
        multiply(num1, num2)
    }

    if (operator === '+') {
        divide(num1, num2)
    }

}

// Function for populate the display
// Variable for storing display value