const card = document.getElementById('card');
const toLogin = document.getElementById('to-login');
const toRegister = document.getElementById('to-register');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');

// Flip card to login
if (toLogin) {
    toLogin.onclick = () => card.classList.add('flipped');
}
// Flip card to register
if (toRegister) {
    toRegister.onclick = () => card.classList.remove('flipped');
}

// Store registration data in localStorage
registerForm.onsubmit = function(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(registerForm));
    localStorage.setItem('user', JSON.stringify(data));
    alert('Registration successful! You can now login.');
    card.classList.add('flipped');
    registerForm.reset();
};

// Login validation
loginForm.onsubmit = function(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const name = loginForm.name.value;
    const password = loginForm.password.value;
    if (user.name === name && user.password === password) {
        alert('Login successful!');
        // Redirect or show dashboard here
    } else {
        alert('Invalid credentials!');
    }
    loginForm.reset();
};