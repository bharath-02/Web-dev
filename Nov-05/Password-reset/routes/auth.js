const express = require('express');
const router = express.Router();
//  Import controller
const { signup, activateAccount, signin, forgotPassword, resetPassword } = require('../controllers/auth');

router.post('/signup', signup);
router.post('/email-activate', activateAccount);
router.post('/signin', signin);
router.put('/forgot-password', forgotPassword);
router.put('/reset-password', resetPassword);

module.exports = router;