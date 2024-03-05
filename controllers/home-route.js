const router = require('express').Router();
const { Post, Comments, User } = require('../models')

// renders homepage, gets all posts from db
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [{ model: Comments }, { model: User }]
        })

        const posts = dbPostData.map((post) =>
            post.get({ plain: true })
        );

        console.log(posts);
        res.render('home', { posts, loggedIn: req.session.loggedIn });
    } catch (error) {
        console.error('Error getting products: ', error);
        res.status(500).json(error);
    }
});

router.use((req, res) => {
    res.status(404).render('error');
});

module.exports = router;