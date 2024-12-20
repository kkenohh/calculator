// variables
let total = "0";
let current = "";
let curOperator = "";
let last;
const key = {
  add: "+",
  subtract: "-",
  multiply: "x",
  divide: "/",
};
const keyMap = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  ".": "decimal",
  "+": "add",
  "-": "subtract",
  "*": "multiply",
  "/": "divide",
  Enter: "equals",
  "=": "equals",
  Backspace: "clear",
};

// queries
const topPrint = document.querySelector(".top");
topPrint.textContent = " ";

const currentPrint = document.querySelector(".current");
currentPrint.textContent = current;

const buttons = document.querySelectorAll(".button");

// operators

// adds a and b
function add(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a + b;
}

// subtracts b from a
function subtract(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a - b;
}

// multiplies a and b
function multiply(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a * b;
}

// divides a by b
function divide(a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a / b);
  return a / b;
}

// does the given operation on the numbers a and b, in that order
// ex. a - b, a / b
function operate(operator, a, b) {
  if (total == 0) {
    total = current;
    return;
  }
  switch (operator) {
    case "add":
      total = "" + add(a, b);
      break;
    case "subtract":
      total = "" + subtract(a, b);
      break;
    case "multiply":
      total = "" + multiply(a, b);
      break;
    case "divide":
      total = "" + divide(a, b);
      break;
  }
}

// other functions

// action for when button is clicked on the UI
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
    current = "";
    topPrint.textContent = `${total} ${key[identity[0]]}`;
    currentPrint.textContent = "";
  }
  if (current === ".") {
    current = "0.";
    currentPrint.textContent = "0.";
  }
  switch (identity[0]) {
    case "clear":
      clear();
      break;
    case "seven":
      if (curOperator == "equals") clear();
      current += 7;
      currentPrint.textContent = `${current}`;
      break;
    case "eight":
      if (curOperator == "equals") clear();
      current += 8;
      currentPrint.textContent = `${current}`;
      break;
    case "nine":
      if (curOperator == "equals") clear();
      current += 9;
      currentPrint.textContent = `${current}`;
      break;
    case "four":
      if (curOperator == "equals") clear();
      current += 4;
      currentPrint.textContent = `${current}`;
      break;
    case "five":
      if (curOperator == "equals") clear();
      current += 5;
      currentPrint.textContent = `${current}`;
      break;
    case "six":
      if (curOperator == "equals") clear();
      current += 6;
      currentPrint.textContent = `${current}`;
      break;
    case "one":
      if (curOperator == "equals") clear();
      current += 1;
      currentPrint.textContent = `${current}`;
      break;
    case "two":
      if (curOperator == "equals") clear();
      current += 2;
      currentPrint.textContent = `${current}`;
      break;
    case "three":
      if (curOperator == "equals") clear();
      current += 3;
      currentPrint.textContent = `${current}`;
      break;
    case "zero":
      if (curOperator == "equals") clear();
      current += 0;
      currentPrint.textContent = `${current}`;
      break;
    case "decimal":
      if (!current.match(/\d*\.\d*/)) {
        current += ".";
        currentPrint.textContent = `${current}`;
      }
      break;
    case "equals":
      operate(curOperator, total, current);
      current = "";
      curOperator = "equals";
      topPrint.textContent = "";
      currentPrint.textContent = `${total}`;
      break;
  }
}

// resets the calculator state
function clear() {
  total = "0";
  current = "";
  topPrint.textContent = "";
  currentPrint.textContent = "";
  curOperator = "";
}

// action for when key is pressed
function keyAction(e) {
  const identity = keyMap[e.key];
  if (!identity) return;
  const fakeEvent = {
    target: { className: identity },
  };
  buttonAction(fakeEvent);
}

// event listeners
window.addEventListener("keydown", keyAction);
buttons.forEach(addEventListener("click", buttonAction));
