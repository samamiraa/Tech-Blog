// requires all external route files
const router = require('express').Router();

const loginRoutes = require('./login-route.js');

router.use('/login', loginRoutes);

module.exports = router;