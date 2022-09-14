// variables

let total = '0';
let current = '';
let curOperator = '';
let last;
let key = {
    'add': '+',
    'subtract': '-',
    'multiply': 'x',
    'divide': '/'
};

// queries and listeners

const topPrint = document.querySelector('.top');
topPrint.textContent = ' ';

const currentPrint = document.querySelector('.current');
currentPrint.textContent = current;

const buttons = document.querySelectorAll('.button');

// operators 

function add(a ,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a + b;
}

function subtract(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a - b;
}

function multiply(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a * b;
}

function divide(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a / b)
    return a / b;
}

function operate(operator, a, b) {
    if (total == 0) {
        total = current;
        return;
    }
    switch (operator) {
        case 'add':
            total = '' + add(a, b);
            break;
        case 'subtract':
            total = '' + subtract(a, b);
            break;
        case 'multiply':
            total = '' + multiply(a, b);
            break;
        case 'divide':
            total = '' + divide(a, b); 
            break;
    }
}

// other functions

function buttonAction(e) {
    let identity = e.target.className.match(/\w+/);
    if (Object.hasOwn(key, identity[0])) {
        if (!curOperator) {
            curOperator = `${key[identity[0]]}`;
        }
        if (Object.hasOwn(key, last)) {
            curOperator = identity[0];
            topPrint.textContent = `${total} ${key[identity[0]]}`;
            return;
        }
        operate(curOperator, total, current);
        curOperator = identity[0];
        current = '';
        topPrint.textContent = `${total} ${key[identity[0]]}`;
        currentPrint.textContent = '';
    }
    console.log(identity)
    switch (identity[0]) {
        case 'clear':
            clear();
            break;
        case 'seven':
            if (curOperator == 'equals') clear();
            current += 7;
            currentPrint.textContent = `${current}`;
            break;
        case 'eight':
            if (curOperator == 'equals') clear();
            current += 8;
            currentPrint.textContent = `${current}`;
            break;
        case 'nine':
            if (curOperator == 'equals') clear();
            current += 9;
            currentPrint.textContent = `${current}`;
            break;
        case 'four':
            if (curOperator == 'equals') clear();
            current += 4;
            currentPrint.textContent = `${current}`;
            break;
        case 'five':
            if (curOperator == 'equals') clear();
            current += 5;
            currentPrint.textContent = `${current}`;
            break;
        case 'six':
            if (curOperator == 'equals') clear();
            current += 6;
            currentPrint.textContent = `${current}`;
            break;
        case 'one':
            if (curOperator == 'equals') clear();
            current += 1;
            currentPrint.textContent = `${current}`;
            break;
        case 'two':
            if (curOperator == 'equals') clear();
            current += 2;
            currentPrint.textContent = `${current}`;
            break;
        case 'three':
            if (curOperator == 'equals') clear();
            current += 3;
            currentPrint.textContent = `${current}`;
            break;
        case 'zero':
            if (curOperator == 'equals') clear();
            current += 0;
            currentPrint.textContent = `${current}`;
            break;
        case 'decimal':
            if (!current.match(/\d*\.\d*/)) {
                current += '.';
                currentPrint.textContent = `${current}`;
            }
            break;
        case 'equals':
            operate(curOperator, total, current);
            current = '';
            curOperator = 'equals';
            topPrint.textContent = '';
            currentPrint.textContent = `${total}`;
            break;
    }
}

function clear() {
    total = '0';
    current = '';
    topPrint.textContent = '';
    currentPrint.textContent = '';
    curOperator = '';
}

function keyAction(e) {
    let identity = e.keycode;
    
}

// event listeners

buttons.forEach(addEventListener('click', buttonAction));
window.addEventListener('keydown', keyAction);