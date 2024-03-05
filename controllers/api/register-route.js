const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

//renders dashboard
router.get('/', async (req, res) => {
    res.render('register.handlebars');
});

// creates new user, encrypts password
router.post('/', async (req, res) => {
    try {
        const hashPassword = req.body;

        hashPassword.password = await bcrypt.hash(req.body.password, 10);

        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.email,
            password: hashPassword.password,
        });

        req.session.loggedIn = true;
        req.session.userId = newUser.id;
        req.session.save((err) => {
            console.log(req.session.userId);
            
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
        });

        res.redirect('/api/dashboard');
    } catch (error) {
        console.error('Error adding new user:', error);
        return res
            .status(500)
            .json({ message: 'Internal Server Error adding new user!' });
    };
});

module.exports = router;