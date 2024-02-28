const router = require('express').Router();
const { User } = require('../../models')

router.get('/', async (req, res) => {
    res.render('login.handlebars');
});

// router.post('/login', async (req, res) => {
//     console.log(req.body);
//     try {
//         const loginUser = await User.findOne({
//             where: {
//                 email: req.body.email,
//             },
//         });

//         if (!loginUser) {
//             res.status(400);
//             return;
//         }

//         const validPassword = await loginUser.checkPassword(req.body.password);

//         if (!validPassword) {
//             res.status(400);
//             return;
//         };

//         req.session.save(() => {
//             req.session.loggedIn = true;
//             console.log(
//                 'File: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
//                 req.session.cookie
//             );
//         });

//         res.redirect('/api/dashboard');
//         } catch (error) {
//             console.log(error);
//             res.status(500).json(error);
//         }
//     });

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;