const logoutBtn = document.getElementById('logout-btn');

//logs user out
logoutBtn.addEventListener('click', async function () {
    const postRequest = axios.post('/api/logout');
    postRequest
        .then(function (response) {
            console.log('success!', response.data);
            window.location.replace('/');
        })
        .catch(function (error) {
            console.error('Error:', error.message);
        });

});



