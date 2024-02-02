// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later. 

let firstNumber = '';
let operator = '';
let secondNumber = '';


const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
const backspaceButton = document.querySelector('.backspace');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        appendOperator(button.textContent);
    });
});

clearButton.addEventListener('click', clearDisplay);
equalsButton.addEventListener('click', evaluate);
decimalButton.addEventListener('click', () => {
    if (operator === '') {
        if (!firstNumber.includes('.')) {
            firstNumber += '.';
        }
    } else {
        if (!secondNumber.includes('.')) {
            secondNumber += '.';
        }
    }
    updateDisplay();
});

backspaceButton.addEventListener('click', () => {
    if (secondNumber !== '') {
        secondNumber = secondNumber.slice(0, -1);
    } else if (operator !== '') {
        operator = '';
    } else {
        firstNumber = firstNumber.slice(0, -1);
    }
    updateDisplay();
});

// Create a new function that updates the display.

function updateDisplay() {
    display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;
}




// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers. 

function operate(operator, firstNumber, secondNumber) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
}

// Create a new function that takes two numbers and returns their sum.

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

// Create a new function that takes two numbers and returns their difference.

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

// Create a new function that takes two numbers and returns their product.

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

// Create a new function that takes two numbers and returns their quotient.

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

// Create a new function that clears the display.

function clearDisplay() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    display.textContent = '';
}

// Create a new function that appends a number to the display.

function appendNumber(number) {
    if (operator === '') {
        firstNumber += number;
    } else {
        secondNumber += number;
    }
    updateDisplay();
}

// Create a new function that appends an operator to the display.

function appendOperator(newOperator) {
    if (firstNumber === '') {
        return;
    }
    if (secondNumber !== '') {
        firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        secondNumber = '';
    }
    operator = newOperator;
    updateDisplay();
}


// Create a new function that evaluates the display.

function evaluate() {
    if (secondNumber === '') {
        return;
    }
    firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    secondNumber = '';
    operator = '';
    updateDisplay();
}

// Create a new function that initializes the calculator.

function initializeCalculator() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    display.textContent = '';
}

