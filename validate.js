const form = document.getElementById('signupForm');
const password = document.getElementById('password');
const cPassword = document.getElementById('c_password');

form.onsubmit = (e) => {
  e.preventDefault();
  if (password.value !== cPassword.value) {
    alert('Passwords must match');
  }
};
