/* eslint-disable indent */
const { Router } = require('express');
const router = Router();
// const jwt = require('jsonwebtoken');
// const passport = require('passport');

const validateMiddleware = require('../middleware/validateMiddleware');
const { registrationValidator } = require('../utils/validate/schemas');

const { users: ctrl } = require('../controllers/');

// const auth = (req, res, next) => {
//   passport.authenticate('jwt', { session: false }, (err, user) => {
//     if (!user || err) {
//       return res.status(401).json({
//         status: 'Error',
//         code: 401,
//         message: 'Unauthorized',
//         data: 'Unauthorized',
//       });
//     }

//     req.user = user;
//     next();
//   })(req, res, next);
// };

router.post('/signup', validateMiddleware(registrationValidator), ctrl.signup);

module.exports = router;
