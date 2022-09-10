// CURRENT PROBLEM:
// 
// still continues to add numbers together even after clearing it.


// variables

let total = '0';
let current = '';
let last = '';
let curOperator = 'equals';

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
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case add:
            add(a, b);
            break;
        case subtract:
            subtract(a, b);
            break;
        case multiply:
            multiply(a, b);
            break;
        case divide:
            divide(a, b);
            break;
    }
}

// other functions

function buttonAction(e) {
    let identity = e.target.className.match(/\w+/);
    switch (identity[0]) {
        case 'clear':
            total = '0';
            current = '';
            topPrint.textContent = '';
            currentPrint.textContent = '';
            curOperator = 'equals';
            last = '';
            break;
        case 'division':
            if (curOperator != 'equals') {
                total = '' + divide(total, current);
            } else if (curOperator == 'equals' && last != '') {
                total = last;
            } else {
                total = current;
            }
            curOperator = 'division';
            current = '';
            topPrint.textContent = `${total} /`;
            currentPrint.textContent = '';
            break;
        case 'seven':
            current += 7;
            currentPrint.textContent = `${current}`;
            break;
        case 'eight':
            current += 8;
            currentPrint.textContent = `${current}`;
            break;
        case 'nine':
            current += 9;
            currentPrint.textContent = `${current}`;
            break;
        case 'multiplication':
            if (curOperator != 'equals') {
                total = '' + multiply(total, current);
            }else if (curOperator == 'equals' && last != '') {
                total = last;
            } else {
                total = current;
            }
            curOperator = 'multiplication';
            current = '';
            topPrint.textContent = `${total} x`;
            currentPrint.textContent = '';
            break;
        case 'four':
            current += 4;
            currentPrint.textContent = `${current}`;
            break;
        case 'five':
            current += 5;
            currentPrint.textContent = `${current}`;
            break;
        case 'six':
            current += 6;
            currentPrint.textContent = `${current}`;
            break;
        case 'minus':
            if (curOperator != 'equals') {
                total = '' + subtract(total, current);
            } else if (curOperator == 'equals' && last != '') {
                total = last;
            } else {
                total = current;
            }
            curOperator = 'minus';
            current = '';
            topPrint.textContent = `${total} -`;
            currentPrint.textContent = '';
            break;
        case 'one':
            current += 1;
            currentPrint.textContent = `${current}`;
            break;
        case 'two':
            current += 2;
            currentPrint.textContent = `${current}`;
            break;
        case 'three':
            current += 3;
            currentPrint.textContent = `${current}`;
            break;
        case 'plus':
            if (curOperator != 'equals') {
                total = '' + add(total, current);
            } else if (curOperator == 'equals' && last != '') {
                total = last;
            } else {
                total = current;
            }
            curOperator = 'plus';
            current = '';
            topPrint.textContent = `${total} +`;
            currentPrint.textContent = '';
            break;
        case 'zero':
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
            switch (curOperator) {
                case 'plus':
                    total = '' + add(total, current);
                    break;
                case 'minus':
                    total = '' + subtract(total, current);
                    break;
                case 'division':
                    total = '' + divide(total, current);
                    break;
                case 'multiplication':
                    total = '' + multiply(total, current);
                    break;
                case 'equals':
                    break;
            }
            last = total;
            curOperator = 'equals';
            topPrint.textContent = '';
            currentPrint.textContent = `${total}`;
            break;
    }
}

function keyAction(e) {
    let identity = e.keycode;
    
}

// event listeners

buttons.forEach(addEventListener('click', buttonAction));
window.addEventListener('keydown', keyAction);