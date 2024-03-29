const router = require('express').Router();

// redirects user if already logged out, otherwise logs user out
router.post('/', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
    } else {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
});

module.exports = router;