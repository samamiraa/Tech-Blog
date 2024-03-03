// requires all external route files
const router = require('express').Router();

const loginRoutes = require('./login-route.js');
const registerRoutes = require('./register-route.js');
const dashboardRoutes = require('./dashboard-route.js');
const postRoutes = require('./post-route.js');

router.use('/login', loginRoutes);
router.use('/register', registerRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/post', postRoutes);

module.exports = router;