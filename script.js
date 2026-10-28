
function addValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

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
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculate() {
    let display = document.getElementById("display");

    try {
        let expression = display.value;

        if (!expression || !/^[0-9+\-*/.()\s]+$/.test(expression)) {
            throw new Error();
        }

        let result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            display.value = "Cannot divide by zero";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Invalid input";
    }
}

// Keyboard input
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (/^[0-9.+\-*/()]$/.test(key)) {
        addValue(key);
    } 
    else if (key === "Enter" || key === "=") {
        calculate();
    } 
    else if (key === "Backspace") {
        let display = document.getElementById("display");
        display.value = display.value.slice(0, -1);
    } 
    else if (key === "Escape") {
        clearDisplay();
    }
});
