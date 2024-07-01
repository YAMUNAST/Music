/ public/scripts.js

// You can add client-side validation or other interactions here if needed
// For example, validating form fields before submission

// Example: Validate login form
document.getElementById('loginForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        event.preventDefault();
        alert('Please enter username and password.');
    }
});

// Example: Validate signup form
document.getElementById('signupForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!username || !password || !email) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});