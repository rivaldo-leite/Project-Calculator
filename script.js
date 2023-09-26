
const display = document.querySelector('.display');
const zero = document.querySelector('#zero-button');
const one = document.querySelector('#one-button');
const two = document.querySelector('#two-button');
const three = document.querySelector('#three-button');
const four = document.querySelector('#four-button');
const five = document.querySelector('#five-button');
const six = document.querySelector('#six-button');
const seven = document.querySelector('#seven-button');
const eigth = document.querySelector('#eigth-button');
const nine = document.querySelector('#nine-button');
const plus = document.querySelector('#add-button');
const minus = document.querySelector('#subtract-button');
const mult = document.querySelector('#multiply-button');
const div = document.querySelector('#divide-button');
const equal = document.querySelector('#equal-button');
const clear = document.querySelector('#clear-button');


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return "Indetermination";
    }

}

function operate(n1, op, n2) {
    if (op === '+') {
        return add(n1, n2);
    }
    else if (op === '-') {
        return subtract(n1, n2);
    }
    else if (op === 'x') {
        return multiply(n1, n2);
    }
    else if (op === '÷') {
        return divide(n1, n2);
    }
}

zero.addEventListener('click', () => {
    display.textContent += 0;
});

one.addEventListener('click', () => {
    display.textContent += 1;
    
});

two.addEventListener('click', () => {
    display.textContent += 2;
});

three.addEventListener('click', () => {
    display.textContent += 3;
});

four.addEventListener('click', () => {
    display.textContent += 4;
});

five.addEventListener('click', () => {
    display.textContent += 5;
});

six.addEventListener('click', () => {
    display.textContent += 6;
});

seven.addEventListener('click', () => {
    display.textContent += 7;
});

eigth.addEventListener('click', () => {
    display.textContent += 8;
});

nine.addEventListener('click', () => {
    display.textContent += 9;
});

clear.addEventListener('click', () => {
    display.textContent = '';
});

plus.addEventListener('click', () => {
    display.textContent += '+';
});

minus.addEventListener('click', () => {
    display.textContent += '-';
});

mult.addEventListener('click', () => {
    display.textContent += 'x';
});

div.addEventListener('click', () => {
    display.textContent += '÷';
});

equal.addEventListener('click', () => {
    let plusSign = display.textContent.indexOf('+');
    let minusSign = display.textContent.indexOf('-');
    let multiplySign = display.textContent.indexOf('x');
    let divideSign = display.textContent.indexOf('÷');

    if (plusSign > 0) {
        let first;
        let second;
        first = display.textContent.slice(0, plusSign);
        second = display.textContent.slice(plusSign + 1);
        display.textContent = operate(Number(first), '+', Number(second));
    }

    else if (minusSign > 0) {
        let first;
        let second;
        first = display.textContent.slice(0, minusSign);
        second = display.textContent.slice(minusSign + 1);
        display.textContent = operate(Number(first), '-', Number(second));
    }

    else if (multiplySign > 0) {
        let first;
        let second;
        first = display.textContent.slice(0, multiplySign);
        second = display.textContent.slice(multiplySign + 1);
        display.textContent = multiply(Number(first), Number(second));
    }

    else if (divideSign > 0) {
        let first;
        let second;
        first = display.textContent.slice(0, divideSign);
        second = display.textContent.slice(divideSign + 1);
        display.textContent = divide(Number(first), Number(second));
    }
});