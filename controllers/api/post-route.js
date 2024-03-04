const router = require('express').Router();
const { Post, Comments, User } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [{ model: Comments, include: [User] }, { model: User }]
      });

      const post = dbPostData.get({ plain: true });
      console.log(post);
  
      res.render('posts', { post });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

router.post('/comment', async (req, res) => {
  try {
    const newComment = await Comments.create ({
      comment: req.body.commentDescription,
      userId: req.session.userId,
      postId: req.body.postId,
    });
    res.json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
})

module.exports = router;