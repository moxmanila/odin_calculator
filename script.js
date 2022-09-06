//BASIC CALCULATE FUNCTIONS
const add = function(a, b) {
    return a + b
}

const subtract = function(a, b) {
    return a - b
}

const multiply = function (a, b) {
    return a * b
}

const divide = function (a, b) {
    return a / b
}

//BASIC OPERATE FUNCTION 
const operate = function (num1, operator, num2, ) {
    if (operator === "+") {
        return add (num1, num2)
    } else if (operator === "-") {
        return subtract (num1, num2)
    } else if (operator === "*") {
        return multiply (num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2)
    } else {
    return "ERROR " +operator+ " IS NOT A VALID INPUT"
    }
};

// DOM SECTION

let firstValue 
let secondValue 
let operateValue
let display = document.getElementById('result')
let clear = document.querySelector('.clear').addEventListener('click', clearDisplay)

function clearDisplay () {
    display.textContent = ''
}

// DISPLAY PRESSED BUTTONS
let numberBtn = document.querySelectorAll('.number-button')
for (let i = 0; i<=numberBtn.length-1; i++) {
    numberBtn[i].addEventListener ('click', function () {
        display.textContent += numberBtn[i].textContent
    })
}
//OPERATOR FUNCTION
let operator = document.querySelectorAll('.operator')
for (i of operator) {
    i.addEventListener ('click', calculate)
}


function calculate(e) {
    if (firstValue == undefined) {
        firstValue = parseInt(display.textContent)
        operateValue = e.target.textContent
        clearDisplay()
    // CHECK IF I RECLICKED THE OPERATOR BUTTONS
    } else if (display.textContent == '') {
        operateValue = e.target.textContent
    } else {
        secondValue = parseInt(display.textContent)
        display.textContent = operate(firstValue, operateValue, secondValue)
        firstValue = undefined
        secondValue = undefined
        operateValue = undefined
    } 
};





