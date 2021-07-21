/* eslint-disable indent */
const { Router } = require('express');
const router = Router();

const { validate, authenticate } = require('../middleware/');
const { registrationValidator } = require('../utils/validate/schemas');

const { users: ctrl } = require('../controllers/');

router.post('/signup', validate(registrationValidator), ctrl.signup);
router.post('/login', validate(registrationValidator), ctrl.login);
router.get('/logout', authenticate, ctrl.logout);
router.get('/current', authenticate, ctrl.getCurrentUser);

module.exports = router;
