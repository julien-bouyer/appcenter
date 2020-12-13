const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const auth = require('../../../config/auth');

router.post('/register', userController.registerNewUser);
router.post('/login', userController.loginUser);
router.get('/me', auth, userController.getUserDetails);
router.get('/:id?', auth, userController.find);

module.exports = router;
