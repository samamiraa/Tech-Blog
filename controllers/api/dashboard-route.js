const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('dashboard.handlebars');
});

module.exports = router;