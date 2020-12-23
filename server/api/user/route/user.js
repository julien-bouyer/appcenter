const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const auth = require('../../../config/auth');

router.get('/:id?', auth, userController.find);
router.post('/', auth, userController.save);
router.put('/:id', auth, userController.save);
router.post('/login', userController.loginUser);

module.exports = router;
