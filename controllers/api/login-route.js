const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models')

router.get('/', async (req, res) => {
    res.render('login.handlebars');
});

router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const loginUser = await User.findOne({
            where: {
                username: req.body.email,
            },
        });

        console.log(loginUser);

        if (!loginUser) {
            res.status(400);
            return;
        }

        const validPassword = await bcrypt.compare(req.body.password, loginUser.password);

        if (!validPassword) {
            res.status(400);
            return;
        };

        req.session.save(() => {
            req.session.loggedIn = true;
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