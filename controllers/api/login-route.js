const router = require('express').Router();
const { User } = require('../../models')

router.get('/', async (req, res) => {
    res.render('login.handlebars');
});

router.post('/login', async (req, res) => {
    try {
        const loginUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!loginUser) {
           res.status(400);
           return;
        }
    } catch (error) {
        
    }
});

module.exports = router;