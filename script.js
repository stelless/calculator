let display = document.getElementById('display'); 
let firstNumber = 0;
let operator = '';
function pressDigit(digit) {
    display.value = display.value + digit;
}
function clearAll() {
    display.value = '';
    firstNumber = 0;
    operator = '';
}
function pressOperator(op) {
    firstNumber = Number(display.value);
    operator = op;
    display.value = ''; 
}
function calculate() {
    let secondNumber = Number(display.value);
    let result = 0;
    if (operator === '+') {
        result = firstNumber + secondNumber;
    }
    display.value = result;
}