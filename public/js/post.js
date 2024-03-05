const addCommentBtn = document.getElementById('comment-Btn');
const createCommentBtn = document.getElementById('create-comment-Btn');
const deleteCommentBtns = document.querySelectorAll('.delete-comment-Btn');

addCommentBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');

    const commentForm = document.getElementById('comment-form');
    commentForm.parentElement.classList.remove('hide');
    addCommentBtn.classList.add('hide');
});

createCommentBtn.addEventListener('click', async function (event) {

    const commentDescription = document.getElementById('comment-description').value;
    const postId = event.target.dataset.id;
    const commentData = { commentDescription, postId };

    const postRequest = axios.post('/api/post/comment', commentData)

    await postRequest
        .then(function (response) {
            console.log('Comment created Successfully!', response.data);
            window.location.replace('/api/post/' + postId);
        })
        .catch(function (error) {
            console.error('Error creating post:', error.message);
        });
});

deleteCommentBtns.forEach((deleteCommentBtn) => {
    deleteCommentBtn.addEventListener('click', async function (event) {

        const postId = this.getAttribute('data-id');

        const deleteRequest = axios.delete('/api/post/comment/' + postId);

        deleteRequest
            .then(function (response) {
                console.log('Response:', response.data);
                window.location.reload();
            })
            .catch(function (error) {
                console.error('Error:', error.message);
            });
    });
});