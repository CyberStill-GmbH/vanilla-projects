const toggle = document.getElementById('billing-toggle-input');
const prices = document.querySelectorAll('.price-amount');
const labelMonthly = document.getElementById('label-monthly');
const labelYearly = document.getElementById('label-yearly');

toggle.addEventListener('change', () => {
    const isYearly = toggle.checked;
    prices.forEach(e => {
        e.textContent = isYearly ? e.dataset.yearly : e.dataset.monthly;
    });
    labelMonthly.classList.toggle('toggle-active', !isYearly);
    labelYearly.classList.toggle('toggle-active', isYearly);
});

