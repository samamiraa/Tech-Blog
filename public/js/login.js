const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', async function (event) {
    event.preventDefault();

    console.log(loginBtn + 'has been clicked!')

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    console.log(email + ' ' + password);

    const existingUser = { email, password };

    if (email && password) {
        const toastLiveExample = document.getElementById('liveToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
        
        postRequest = axios.post('/api/login', existingUser);

        await postRequest
            .then(function (response) {
                console.log('Successful login!', response.data);
                window.location.replace('/api/dashboard');
            })
            .catch(function (error) {
                toastBootstrap.show()
                console.error('Error loggin in:', error.message);
            });
    };
});
