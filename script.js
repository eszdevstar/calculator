
// Operations
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

// Logic
const buttons = document.querySelectorAll('.button');
const displayContainer = document.getElementById('display-container');
const erase = () => displayContainer.innerHTML = '';

buttons.forEach((button) => {
    // change button color
    button.addEventListener('mouseover', () => {
        button.style.color = 'rgb(124 89 32/1)'
    });
    button.addEventListener('mouseout', () => {
        button.style.color = 'rgb(209 213 219/1)'
    });
});

buttons.forEach((button) =>{
    // Listener to display Numbers
    button.addEventListener('click', () =>{
        if(button.textContent === 'Clear'){
            erase();
        }else{
            document.getElementById('display-container').innerHTML +=  (`<div id="${button.textContent}" class="display">${button.textContent}</div>`);
        }

        const number = document.querySelectorAll('.display');
        
        
    });
});



