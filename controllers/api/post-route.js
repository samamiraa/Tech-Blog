const router = require('express').Router();
const { Post, Comments, User } = require('../../models');

router.get('/:id', async (req, res) => {
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [{ model: Comments }, { model: User }]
      });
  
      const post = dbPostData.get({ plain: true });
  
      res.render('posts', { post });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;