const router = require('express').Router();

router.post('/', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/api/login');
    } else {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
});

module.exports = router;