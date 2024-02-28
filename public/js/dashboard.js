const createBtn = document.getElementById('create-btn');

createBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');

    const postForm = document.getElementById('post-form');

    postForm.parentElement.classList.remove('hide');

    // const postRequest = axios.post('/api/post');


});