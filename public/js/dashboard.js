const createBtn = document.getElementById('create-btn');
const postBtn = document.getElementById('post-Btn');
const deletePostBtn = document.getElementById('delete-btn');

createBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');

    const postForm = document.getElementById('post-form');
    postForm.parentElement.classList.remove('hide');
    createBtn.classList.add('hide');
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
    };
});