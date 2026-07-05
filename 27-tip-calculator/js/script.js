const form = document.getElementById("tip-form");

const billInput = document.getElementById("bill-amount");
const billError = document.getElementById("bill-amount-error");

const customTipInput = document.getElementById("custom-tip");
const tipError = document.getElementById("tip-error");
const tipButtons = document.querySelectorAll(".tip-option");

const peopleInput = document.getElementById("people-count");
const peopleError = document.getElementById("people-error");
const decreaseBtn = document.getElementById("decrease-people");
const increaseBtn = document.getElementById("increase-people");

const tipPerPersonEl = document.getElementById("tip-per-person");
const totalPerPersonEl = document.getElementById("total-per-person");
const grandTotalEl = document.getElementById("grand-total");

const resetBtn = document.getElementById("reset-btn");

let selectedTipPercent = 0;

function formatCurrency(value) {
    if (isNaN(value)) return 'S/ 0.00';
    return 'S/' + value.toFixed(2);
}

tipButtons.forEach((button) => {
    button.addEventListener('click', () => {
        tipButtons.forEach(b => b.classList.remove('is-selected'));
        button.classList.add('is-selected');

        selectedTipPercent = parseFloat(button.dataset.tip);
        customTipInput.value = '';

        validateTip(selectedTipPercent);
    });
});

customTipInput.addEventListener('input', () => {
    tipButtons.forEach(b => b.classList.remove('is-selected'));
    selectedTipPercent = parseFloat(customTipInput.value) || 0;
    validateTip(selectedTipPercent);
    calculate();
});

increaseBtn.addEventListener('click', () => {
    let peopleNumber = parseInt(peopleInput.value, 10);
    peopleNumber++;
    peopleInput.value = peopleNumber;
    validatePeople();
    calculate();
});

decreaseBtn.addEventListener('click', () => {
    let peopleNumber = parseInt(peopleInput.value, 10);
    if (peopleNumber <= 1) return;
    peopleNumber--;
    peopleInput.value = peopleNumber;
    validatePeople();
    calculate();
});

peopleInput.addEventListener('input', () => {
    validatePeople();
    calculate();
});

function validateBill() {
    const billWritten = parseFloat(billInput.value);

    if (isNaN(billWritten) || billWritten < 0) {
        billInput.parentElement.classList.add('is-invalid');
        billError.textContent = 'Ingresa un monto válido (mayor o igual a 0).';
        billError.classList.remove('is-invisible');

        return false;
    } else {
        billInput.parentElement.classList.remove('is-invalid');
        billError.textContent = '';
        billError.classList.add('is-invisible');

        return true;
    }
}

function validateTip(value) {
    const numValue = parseFloat(value);

    if (value < 0 || value > 100) {
        customTipInput.parentElement.classList.add('is-invalid');
        tipError.textContent = "El porcentaje debe de estar entre 0 y 100";
        tipError.classList.remove('is-invisible');

        return false;
    } else {
        customTipInput.parentElement.classList.remove('is-invalid');
        tipError.textContent = '';
        tipError.classList.add('is-invisible');

        return true;
    }
}

function validatePeople() {
    const peopleNumber = parseInt(peopleInput.value, 10);

    if (isNaN(peopleNumber) || peopleNumber < 1) {
        peopleInput.parentElement.classList.add('is-invalid');
        peopleError.textContent = 'Debe haber al menos una persona';
        peopleError.classList.remove('is-invisible');

        return false;
    } else {
        peopleInput.parentElement.classList.remove('is-invalid');
        peopleError.textContent = '';
        peopleError.classList.add('is-invisible');

        return true;
    }
}

billInput.addEventListener('input', () => {
    validateBill();
    calculate();
});

function calculateError(flag) {
    if (flag) {
        tipPerPersonEl.classList.add('data-empty');
        tipPerPersonEl.textContent = 'S/ 0.00';
        totalPerPersonEl.classList.add('data-empty');
        totalPerPersonEl.textContent = 'S/ 0.00';
        grandTotalEl.classList.add('data-empty');
        grandTotalEl.textContent = 'S/ 0.00';
    } else if (!flag) {
        tipPerPersonEl.classList.remove('data-empty');
        totalPerPersonEl.classList.remove('data-empty');
        grandTotalEl.classList.remove('data-empty');
    }
}
function calculate() {
    const isBillValid = validateBill();
    const isPeopleValid = validatePeople();
    const isTipValid = validateTip(selectedTipPercent);

    if (
        !isBillValid
        || !isPeopleValid
        || !isTipValid
    ) {
        calculateError(true);
        return;
    }

    const bill = parseFloat(billInput.value);
    const tipPercent = selectedTipPercent;
    const people = parseInt(peopleInput.value, 10);

    const tipAmount = bill * (tipPercent / 100);
    const totalAmount = bill + tipAmount;

    const tipPerPerson = tipAmount / people;
    const totalPerPerson = totalAmount / people;

    tipPerPersonEl.textContent = formatCurrency(tipPerPerson);
    totalPerPersonEl.textContent = formatCurrency(totalPerPerson);
    grandTotalEl.textContent = formatCurrency(totalAmount);
    calculateError(false);
}

form.addEventListener('reset', () => {
    tipButtons.forEach(b => b.classList.remove('is-selected'));
    selectedTipPercent = 0;
    
    peopleError.classList.add('is-invisible');
    tipError.classList.add('is-invisible');
    billError.classList.add('is-invisible');
    
    billInput.parentElement.classList.remove('is-invalid');
    customTipInput.parentElement.classList.remove('is-invalid');
    peopleInput.parentElement.classList.remove('is-invalid');

    calculateError(true); 
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', () => {
    calculate();
});