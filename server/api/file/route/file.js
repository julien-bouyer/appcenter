const express = require('express');
const router = express.Router();
const fileController = require('../controller/fileController');
const auth = require('../../../config/auth');

router.get('/:id?', auth, fileController.find);
router.post('/', auth, fileController.save);
router.put('/:id', auth, fileController.save);
router.delete('/:id', auth, fileController.delete);

module.exports = router;
