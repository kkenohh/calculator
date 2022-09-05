// operators 

function add(a ,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
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