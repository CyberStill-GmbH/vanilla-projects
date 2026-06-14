const calculatorContainer = document.getElementById('calculator');
const history = document.getElementById('history');
const actualResult = document.getElementById('result');
const keypad = document.getElementById('keypad');

let state = {
    currentValue: "0",
    previousValue: null,
    operator: null,
    overwrite: true
};

function updateDisplay() {
    actualResult.textContent = state.currentValue;
    history.textContent = state.operator
        ? `${state.previousValue} ${state.operator}`
        : '';
}

function inputNumber(num) {
    if (state.overwrite) {
        state.currentValue = num;
        state.overwrite = false;
    } else {
        state.currentValue += num;
    }
}

function inputDecimal() {
    if (state.overwrite) {
        state.currentValue = "0.";
        state.overwrite = false;
        return;
    }
    if (!state.currentValue.includes(".")) {
        state.currentValue += ".";
    }
}

function clearAll() {
    state.currentValue = "0";
    state.previousValue = null;
    state.operator = null;
    state.overwrite = true;
}

function deleteLast() {
    if (state.overwrite) return;
    state.currentValue = state.currentValue.slice(0, -1);
    if (state.currentValue === "" || state.currentValue === "-") {
        state.currentValue = "0";
        state.overwrite = true;
    }
}

function inputPercent() {
    state.currentValue = String(Number(state.currentValue / 100));
}

function calculate() {
    if (state.operator === null || state.previousValue === null) return;

    const prev = Number(state.previousValue);
    const curr = Number(state.currentValue);
    let result;
    
    switch (state.operator) {
        case '+': result = prev + curr; break;
        case '-': result = prev - curr; break;
        case '×': result = prev * curr; break;
        case '÷':
            result = curr === 0 
                ? "Syntax error"
                : prev / curr;
                break;
    }

    state.currentValue = typeof result === "number"
        ? String(Math.round(result * 1e10) / 1e10)
        : result;

        state.previousValue = null;
        state.operator = null;
        state.overwrite = true;
}

function setOperator(op) {
    if (state.operator && state.previousValue !== null) {
        calculate();
    }
    state.previousValue = state.currentValue;
    state.operator = op;
    state.overwrite = true;
}

keypad.addEventListener('click', (event) => {
    const button = event.target.closest('.key');
    if (!button) return;
    const action = button.dataset.action;
    const value = button.dataset.value;

    switch (action) {
        case 'number':
            inputNumber(value);
            break;
        case 'decimal':
            inputDecimal();
            break;
        case 'clear':
            clearAll();
            break;
        case 'delete':
            deleteLast();
            break;
        case 'operator':
            setOperator(value);
            break;
        case 'equals':
            calculate();
            break;
        case 'percent':
            inputPercent();
            break;
        
    }
    updateDisplay();
});