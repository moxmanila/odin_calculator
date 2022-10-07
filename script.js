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
let resultValue
let resultdisplay = document.getElementById('result')
let calcDisplay = document.getElementById('calculation')
let clear = document.querySelector('.clear').addEventListener('click', clearDisplay)

function clearDisplay () {
    resultdisplay.textContent = ''
    calcDisplay.textContent = ''
    firstValue = undefined
    secondValue = undefined
    operateValue = undefined
    resultValue = undefined
}

// DISPLAY PRESSED BUTTONS
let numberBtn = document.querySelectorAll('.number-button')
for (let i = 0; i<=numberBtn.length-1; i++) {
    numberBtn[i].addEventListener ('click', function () {
        calcDisplay.textContent += numberBtn[i].textContent
    })
}
//OPERATOR FUNCTION
let operator = document.querySelectorAll('.operator')
for (i of operator) {
    i.addEventListener ('click', calculate)
}


function calculate(e) {
    //INITIAL STEP TO ENTER THE FIRST VALUE
    if (firstValue == undefined && resultValue == undefined) {
        firstValue = parseInt(calcDisplay.textContent)
        operateValue = e.target.textContent
        calcDisplay.textContent = ''
    // INBETWEEN STEP IF I ALREADY HAD A CALCULATION BEFORE
    } else if (firstValue == undefined && !(resultValue == undefined)) {
    // ASSIGN RESULTVALUE TO BE THE NEW FIRSTVALUE
        firstValue = resultValue
        operateValue = e.target.textContent
    // CALCULATE FIRST AND SECONDVALUE TOGETHER VIA OPERATE FUNCTION
    } else {
        secondValue = parseInt(calcDisplay.textContent)
        resultdisplay.textContent = 'RESULT = ' + operate(firstValue, operateValue, secondValue)
        calcDisplay.textContent = ''
        resultValue = operate(firstValue, operateValue, secondValue)
        firstValue = undefined
        secondValue = undefined
        operateValue = undefined
    } 
};

