const createBtn = document.getElementById('create-btn');
const postBtn = document.getElementById('post-Btn');

createBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');

    const postForm = document.getElementById('post-form');
    postForm.parentElement.classList.remove('hide');
    createBtn.classList.add('hide');
});

postBtn.addEventListener('click', async function (event) {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const toastLiveExample = document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    console.log(`${title}: ${description}`);

    const blogPost = { title, description };

    const postRequest = axios.post('/api/dashboard/post', blogPost);

    if (title && description) {
        await postRequest
            .then(function (response) {
                console.log('Post created Successfully!', response.data);
                toastBootstrap.show();
                window.location.replace('/api/dashboard');
            })
            .catch(function (error) {
                console.error('Error creating post:', error.message);
            });
    };
});