
let display = document.getElementById("display");

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let exp = display.value;

        if (!exp || !/^[0-9+\-*/.() ]+$/.test(exp)) {
            throw new Error();
        }

        let result = Function("return " + exp)();

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}

// Keyboard input
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (key >= "0" && key <= "9") {
        addValue(key);
    } else if (["+", "-", "*", "/", "."].includes(key)) {
        addValue(key);
    } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } else if (key === "Escape") {
        clearDisplay();
    }
});
