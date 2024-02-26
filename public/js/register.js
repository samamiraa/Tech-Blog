const registerBtn = document.getElementById('register-btn');


registerBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastname = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('confirmPassword').value;

    console.log('Register Button has clicked!');
    console.log('name: ' + firstName + lastname);
    console.log('email: ' + email);
    console.log('password: ' + password + passwordConfirm);
});