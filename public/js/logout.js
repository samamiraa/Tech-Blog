const logoutBtn = document.getElementById('logout-btn');


logoutBtn.addEventListener('click', async function (event) {
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