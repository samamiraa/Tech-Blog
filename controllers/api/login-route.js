const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models')

//renders login page
router.get('/', async (req, res) => {
    res.render('login.handlebars');
});

// logs user in
router.post('/', async (req, res) => {
    try {
        const loginUser = await User.findOne({
            where: {
                username: req.body.email,
            },
        });

        if (!loginUser) {
            res.status(400);
        };

        const validPassword = await bcrypt.compare(req.body.password, loginUser.password);

        if (!validPassword) {
            res.status(400);
            return;
        };

        req.session.loggedIn = true;
        req.session.userId = loginUser.id;
        req.session.save(() => {
            console.log(req.session.userId);
            console.log(
                'File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
                req.session.cookie
            );
        });

        res.redirect('/api/dashboard');
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

// logs user out
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;