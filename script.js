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

// console.log (add (3,4))
// console.log (subtract (3,4))
// console.log (multiply (3,4))
// console.log (divide (3,4))
console.log (operate (3,"+",4))
console.log (operate (3,"-",4))
console.log (operate (3,"*",4))
console.log (operate (3,"/",4))
console.log (operate (3,"%",4))