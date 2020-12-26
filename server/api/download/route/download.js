const express = require('express');
const router = express.Router();
const fileController = require('../../file/controller/fileController');

router.post('/f/:token', fileController.download);

module.exports = router;
