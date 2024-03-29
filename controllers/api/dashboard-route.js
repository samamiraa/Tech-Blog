const router = require('express').Router();
const { Post, Comments, User } = require('../../models');

// gets all posts for loggedin user
router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
        const dbPostData = await Post.findAll({
            include: [{ model: Comments }, { model: User }],
            where: {
                userId: req.session.userId,
            },
        })

        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );

        console.log(posts);
        res.render('dashboard.handlebars', { posts });
        } else {
            res.redirect('/api/login')
        };
    } catch (error) {
        console.error('Error getting products: ', error);
        res.status(500).json(error);
    }

});

// creates new post
router.post('/post', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            description: req.body.description,
            userId: req.session.userId,
        });
        return res.redirect('/');
    } catch (error) {
        console.error('Error adding new post:', error);
        return res
            .status(500)
            .json({ message: 'Internal Server Error adding post!' });
    };
});

// deletes post
router.delete('/post/:id', async (req, res) => {
    try {
      await Post.destroy({
        where: {
          id: req.params.id,
        },
      })
      res.json('success!');
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
});

//updates post
router.put('/post/:id', async (req, res) => {
    try {
        const updatePost = await Post.update(
            {
                title: req.body.postTitle,
                description: req.body.postDescription,
            },
            {
                where: {
                    id: req.body.postId,
                },
            },
        )
        res.json(updatePost);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
});
  

module.exports = router;