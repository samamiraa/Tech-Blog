const registerBtn = document.getElementById('register-btn');

registerBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { firstName, lastName, email, password };
    const registerToast = document.getElementById('registerToast');
    const toastRegister = bootstrap.Toast.getOrCreateInstance(registerToast);

    const postRequest = axios.post('/api/register', user);

    postRequest
        .then(function (response) {
            console.log('success!', response.data);
            window.location.replace('/api/dashboard');
        })
        .catch(function (error) {
            console.error('Error:', error.message);
            toastRegister.show();
        });
});