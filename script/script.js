function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const term = parseFloat(document.getElementById('term').value);
    const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;

    const mortgageType = document.querySelector('input[name="mortgageType"]:checked');

    // Check if any input fields are empty
    if (isNaN(amount) || isNaN(term) || isNaN(interest) || amount <= 0 || term <= 0 || interest < 0) {
        alert('Please enter valid values for all fields.');
        return;
    }
    
    // Check if mortgage type is selected
    if (!mortgageType) {
        alert('Please select a mortgage type.');
        return;
    }

    let monthlyPayment, totalPayment;

    // Calculate based on the selected mortgage type
    if (mortgageType.value === 'Repayment') {
        monthlyPayment = (amount * interest) / (1 - Math.pow(1 + interest, -term * 12));
        totalPayment = monthlyPayment * term * 12;
    } else if (mortgageType.value === 'interest-only') {
        monthlyPayment = amount * interest;
        totalPayment = monthlyPayment * term * 12;
    }

    // Display the results
    document.getElementById('monthly-payment').innerText = '$' + monthlyPayment.toFixed(2);
    document.getElementById('total-payment').innerText = '$' + totalPayment.toFixed(2);
}

function clearALL() {
    document.getElementById('amount').value = '';
    document.getElementById('term').value = '';
    document.getElementById('interest').value = '';
    document.getElementById('monthly-payment').innerText = '$0';
    document.getElementById('total-payment').innerText = '$0';
}

window.onload = function () {
    document.getElementById('monthly-payment').innerText = '$0';
    document.getElementById('total-payment').innerText = '$0';
}
