document.addEventListener('DOMContentLoaded', function() {
    const billTotal = document.getElementById('bill-total');
    const tipInput = document.getElementById('tip');
    const tipPercentage = document.getElementById('tip-percentage');
    const tipAmount = document.getElementById('tip-amount');
    const totalWithTip = document.getElementById('total-with-tip');

    const tipForm = document.getElementById('tip-form');
    tipForm.addEventListener('input', updateTip);

    function updateTip() {
        const billAmount = parseFloat(billTotal.value);
        const tipValue = parseFloat(tipInput.value);

        if (isNaN(billAmount)) {
            alert('Please enter a valid number in the Bill Total field.');
            return;
        }

        const tipPercent = tipValue;
        const tip = (billAmount * tipPercent) / 100;
        const total = billAmount + tip;

        tipPercentage.value = tipPercent.toFixed(2) + '%';
        tipAmount.value = tip.toFixed(2);
        totalWithTip.value = total.toFixed(2);
    }
});
