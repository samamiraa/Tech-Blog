const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('register.handlebars');
});

module.exports = router;