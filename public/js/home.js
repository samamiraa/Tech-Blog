const dashboardBtn = document.getElementById('dashboard-btn');

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

