//access btns on frontend
const createBtn = document.getElementById('create-btn');
const postBtn = document.getElementById('post-Btn');
const deletePostBtn = document.getElementById('delete-btn');
const updateBtn = document.getElementById('update-btn');
const backToHome = document.getElementById('back-btn');
const backToDb = document.getElementById('back-to-db-btn');

// redirects to homepage upon click
backToHome.addEventListener('click', async function (event) {
    window.location = '/';
});

// redirects to dashboard upon click
backToDb.addEventListener('click', async function (event) {
    window.location = '/api/dashboard';
});

// shows create blog form
createBtn.addEventListener('click', async function (event) {
    const postForm = document.getElementById('post-form');
    postForm.parentElement.classList.remove('hide');
    createBtn.classList.add('hide');
    deletePostBtn.classList.add('hide');
    updateBtn.classList.add('hide');
    backToHome.classList.add('hide');
    backToDb.classList.remove('hide');
});

// creates blog post
postBtn.addEventListener('click', async function (event) {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

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

// deletes selected blog post
deletePostBtn.addEventListener('click', async function (event) {
    const checkPosts = document.querySelectorAll('.check-post');

    checkPosts.forEach((checkPost) => {
        const postId = checkPost.getAttribute('data-id');
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
        };
    });
});

// updates selected blog post
updateBtn.addEventListener('click', async function (event) {
    const checkPosts = document.querySelectorAll('.check-post:checked');

        if (checkPosts.length === 0) {
            const updateToast = document.getElementById('updateToast');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(updateToast);
            toastBootstrap.show();
        };

    checkPosts.forEach((checkPost) => {
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
        }

    });
});
