function calculate() {
                const amount = parseFloat(document.getElementById('amount').value);
                const term = parseFloat(document.getElementById('term').value);
                const interest = parseFloat(document.getElementById('interest').value) / 100 / 12;

                const mortgageType = document.querySelector('input[name="mortgageType"]:checked').value;

                    let monthlypayment,totalpayment;

                    if (isNaN(amount) || isNaN(term) || isNaN(interestrate) || amount <= 0 || term <= 0 || interestrate < 0){
                        alert('Please enter valid values for all fields.');
                    }

                    if (mortgageType === 'repayment') { monthlypayment = (amount * interestrate) / (1 - math.pow(1 + interestrate, -term * 12));
                        totalpayment = monthlypayment * term * 12;
                    } else if (mortgageType === 'interest-only') {
                        monthlypayment = amount * interestrate;
                        totalpayment = monthlypayment * term * 12;
                    }

                document.getElementById('monthly-payment').innerText = '₤${monthlypayment.toFixed(2)}';
                document.getElementById('total-payment').innerText = '₤${totalpayment.toFixed(2)}';
                document.getElementById('result').style.display = 'block';
            }