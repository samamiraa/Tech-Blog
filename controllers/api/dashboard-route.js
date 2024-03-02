const router = require('express').Router();
const { Post, Comments } = require('../../models');

router.get('/', async (req, res) => {

    res.render('dashboard.handlebars');
});

router.post('/post', async (req, res) => {
    console.log(req.body);
    console.log(req.session.userId);
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

module.exports = router;