function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
function attachValidator(selector) {
  const form = document.querySelector(selector);
  if (!form) return;
  const msg = document.createElement('div');
  form.appendChild(msg);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]')?.value || '';
    const email = form.querySelector('input[name="email"]')?.value || '';
    if (!isValidEmail(email)) {
      msg.textContent = 'Invalid email format';
      msg.style.color = 'red';
    } else {
      msg.textContent = 'Success';
      msg.style.color = 'green';
    }
  });
}
if (typeof module !== 'undefined') module.exports = { isValidEmail, attachValidator };