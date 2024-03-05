const dashboardBtn = document.getElementById('dashboard-btn');
const navLoginBtn = document.getElementById('nav-login-btn');
const navRegisterBtn = document.getElementById('nav-register-btn');

navLoginBtn.addEventListener('click', async function () {
    const getRequest = axios.get('/api/login');

    await getRequest
    .then(function (response) {
        console.log('Successful redirect!', response.data);
        window.location.replace('/api/login');
    })
    .catch(function (error) {
        console.error('Error redirecting:', error.message);
    });
})

navRegisterBtn.addEventListener('click', async function () {
    const getRequest = axios.get('/api/register');

    await getRequest
    .then(function (response) {
        console.log('Successful redirect!', response.data);
        window.location.replace('/api/register');
    })
    .catch(function (error) {
        console.error('Error redirecting:', error.message);
    });
})

dashboardBtn.addEventListener('click', async function () {

    const getRequest = axios.get('/api/dashboard');
    getRequest
        .then(function (response) {
            console.log('success!', response.data);
            window.location.replace('/api/dashboard');
        })
        .catch(function (error) {
            console.error('Error:', error.message);
        });

});

