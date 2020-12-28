const express = require('express');
const cors = require('cors');
const router = express.Router();
const fileController = require('../../file/controller/fileController');

router.get(
  '/f/:token',
  cors({
    exposedHeaders: ['Content-Disposition', 'Content-Type', 'Content-Length'],
  }),
  fileController.download
);

module.exports = router;
