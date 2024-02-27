const router = require('express').Router();
const { User } = require('../../models')

router.get('/', async (req, res) => {
    res.render('register.handlebars');
});

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const newUser = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.email,
            password: req.body.password,
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