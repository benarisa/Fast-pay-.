// public/js/script.js

document.getElementById('trackPayment').addEventListener('click', () => {
  const paymentId = prompt("Enter your payment tracking ID:");
  if (paymentId) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentId })
    })
    .then(res => res.json())
    .then(data => alert(`Status: ${data.status}`))
    .catch(() => alert('Error tracking payment.'));
  }
});

document.getElementById('acceptPayment').addEventListener('click', () => {
  alert("⚠️ Accepting payment will finalize the transfer.");
});

document.getElementById('cancelTransfer').addEventListener('click', () => {
  alert("⚠️ Cancelling the payment will refund the sender immediately.");
});
