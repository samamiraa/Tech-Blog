const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('login.handlebars');
});

module.exports = router;