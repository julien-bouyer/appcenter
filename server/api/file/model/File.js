const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const fileSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please include a file name'],
  },
  path: {
    type: String,
    required: [true, 'Please include a file path'],
  },
  url: {
    type: String,
    required: true,
  },
  jwt: {
    type: String,
    required: true,
  },
  secret: {
    type: String,
    required: true,
  },
});

const File = mongoose.model('File', fileSchema);
module.exports = File;
