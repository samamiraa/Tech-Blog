const loginBtn = document.getElementById('login-btn');

// logs user in
loginBtn.addEventListener('click', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const existingUser = { email, password };

    if (existingUser || !existingUser) {
        const loginToast = document.getElementById('loginToast');
        const toastLogin = bootstrap.Toast.getOrCreateInstance(loginToast);
        
        postRequest = axios.post('/api/login', existingUser);

        postRequest
            .then(function (response) {
                console.log('Successful login!', response.data);
                window.location.replace('/api/dashboard');
            })
            .catch(function (error) {
                console.error('Error loggin in:', error.message);
                toastLogin.show();
            });
    };
});
