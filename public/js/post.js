const addCommentBtn = document.getElementById('comment-Btn');
const createCommentBtn = document.getElementById('create-comment-Btn');
const deletePostBtn = document.getElementById('delete-post-btn');

addCommentBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');

    const commentForm = document.getElementById('comment-form');
    commentForm.parentElement.classList.remove('hide');
    addCommentBtn.classList.add('hide');
});

createCommentBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');
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

deletePostBtn.addEventListener('click', async function (event) {
    console.log('button clicked!');
    const postId = event.target.dataset.id;

    console.log('postId: ' + postId);

    const deleteRequest = axios.delete('/api/post/' + postId);

    deleteRequest
    .then(function (response) {
        console.log('Response:', response.data);
        window.location.replace('/');
      })
      .catch(function (error) {
        console.error('Error:', error.message);
      });
});