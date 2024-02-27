const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Register Button has clicked!');
    console.log('name: ' + firstName + lastName);
    console.log('email: ' + email);
    console.log('password: ' + password);

    const user = { firstName, lastName, email, password };

    const postRequest = axios.post('/api/register', user);

    postRequest
        .then(function (response) {
            console.log('success!', response.data)
        })
        .catch(function (error) {
            console.error('Error:', error.message);
        });
});