// ok this can be a payment system
// user enters amount
// user picks the payment method: credit card vs paypal
// CC method shows the credit card number
// paypal method shows the email address
// submit button does nothing
// document.body.textContent = 'hello3';

// class Payment {
//   getPaymentInfoField(method) {
//     if (method == 'credit-card') {
//       const field = document.createElement('input');
//       field.placeholder = 'Credit card number';
//     }
//     else if (method == 'paypal') {
//       const field = document.createElement('input');
//       field.placeholder = 'Email address';
//     }
//     return field;
//   }
// }

class Payment {
  constructor(strategy) {
    this.strategy = strategy;
  }
  getPaymentInfoField() {
    return this.strategy.getPaymentInfoField();
  }
}

class PaypalStrategy {
  getPaymentInfoField() {
    const field = document.createElement('input');
    field.placeholder = 'Email address';
    return field;
  }
}

class CreditCardStrategy {
  getPaymentInfoField() {
    const field = document.createElement('input');
    field.placeholder = 'Credit card number';
    return field;
  }
}




document.getElementById('payment-method').addEventListener('change', e => {
  const selectedPaymentMethod = e.target.value;
  let strategy;
  if (selectedPaymentMethod == 'credit-card') {
    strategy = new CreditCardStrategy();
  }
  else if (selectedPaymentMethod == 'paypal') {
    strategy = new PaypalStrategy();
  }
  const payment = new Payment(strategy);
  const paymentInfo = payment.getPaymentInfoField();
  document.getElementById('payment-info').appendChild(paymentInfo);
});




