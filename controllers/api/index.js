// requires all external route files
const router = require('express').Router();

const loginRoutes = require('./login-route.js');
const registerRoutes = require('./register-route.js');

router.use('/login', loginRoutes);
router.use('/register', registerRoutes);

module.exports = router;