const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home.handlebars');
});

module.exports = router;