const createBtn = document.getElementById('create-btn');
const postBtn = document.getElementById('post-Btn');
const deletePostBtn = document.getElementById('delete-btn');
const updateBtn = document.getElementById('update-btn');
const backToHome = document.getElementById('back-btn');
const backToDb = document.getElementById('back-to-db-btn');

backToHome.addEventListener('click', async function (event) {
    console.log('button clicked!');
    window.location = '/';
});

backToDb.addEventListener('click', async function (event) {
    console.log('button clicked!');
    window.location = '/api/dashboard';
});

createBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');

    const postForm = document.getElementById('post-form');
    postForm.parentElement.classList.remove('hide');
    createBtn.classList.add('hide');
    deletePostBtn.classList.add('hide');
    updateBtn.classList.add('hide');
    backToHome.classList.add('hide');
    backToDb.classList.remove('hide');
});

postBtn.addEventListener('click', async function (event) {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;


    console.log(`${title}: ${description}`);

    const blogPost = { title, description };

    const postRequest = axios.post('/api/dashboard/post', blogPost);

    if (title && description) {
        await postRequest
            .then(function (response) {
                console.log('Post created Successfully!', response.data);
                window.location.replace('/api/dashboard');
            })
            .catch(function (error) {
                console.error('Error creating post:', error.message);
            });
    };
});

deletePostBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');

    const checkPost = document.getElementById('check-post');
    const postId = checkPost.getAttribute('data-id');

    console.log('postId: ' + postId);

    if (checkPost.checked === true) {
        const deleteRequest = axios.delete('/api/dashboard/post/' + postId);

        deleteRequest
            .then(function (response) {
                console.log('Response:', response.data);
                window.location.reload();
            })
            .catch(function (error) {
                console.error('Error:', error.message);
            });
    } else {
        const updateToast = document.getElementById('deleteToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(updateToast);
        toastBootstrap.show();

        console.error('Error deleting post!');
    };
});

updateBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');

    const checkPost = document.getElementById('check-post');


    if (checkPost.checked === true) {
        createBtn.classList.add('hide');
        deletePostBtn.classList.add('hide');
        updateBtn.classList.add('hide');
        backToHome.classList.add('hide');
        backToDb.classList.remove('hide');

        const postId = checkPost.getAttribute('data-id');

        const updatePostForm = document.getElementById('update-post-form');
        updatePostForm.parentElement.classList.remove('hide');

        const updatePostBtn = document.getElementById('update-post-Btn');

        updatePostBtn.addEventListener('click', async function (event) {
            const postTitle = document.getElementById('post-title').value;
            const postDescription = document.getElementById('post-description').value;

            console.log(`post title: ${postTitle}, post description: ${postDescription}, postId: ${postId}`);

            const updatePostData = { postTitle, postDescription, postId }

            const putRequest = axios.put('/api/dashboard/post/:id', updatePostData);

            putRequest
                .then(function (response) {
                    console.log('Response:', response.data);
                    window.location = '/api/dashboard';
                })
                .catch(function (error) {
                    console.error('Error:', error.message);
                });
        });
    } else {
        const updateToast = document.getElementById('updateToast');
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(updateToast);
        toastBootstrap.show();
    };
});
