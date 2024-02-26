const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home.handlebars');
});

router.use((req, res) => {
    res.status(404).render('error');
});

module.exports = router;