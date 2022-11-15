
const add = (a, b) =>  a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operator = (op, a, b) => {
    if(op === '+') {
        return add(a, b);
    } else if(op === '-') {
        return subtract(a, b);
    } else if(op === '*') {
        return multiply(a, b);
    } else if(op === '/') {
        return divide(a, b);
    } else {
        return 'needs a operator';
    }
}
