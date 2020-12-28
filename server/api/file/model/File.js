const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const utf8 = require('utf8');

const fileSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please include a name'],
  },
  filename: {
    type: String,
    required: [true, 'Please include a filename'],
  },
  secret: {
    type: String,
    required: [true, 'Please include a secret'],
  },
  url: {
    type: String,
  },
  jwt: {
    type: String,
  },
});

fileSchema.methods.generateJwt = async function() {
  const file = this;
  file.jwt = jwt.sign({ name: file.name }, file.secret, { issuer: 'appcenter', expiresIn: '7 days' });
  file.url = `${process.env.FRONTAPP_URI}/download/${utf8.encode(file.jwt)}`;
  await file.save();
  return file;
};

const File = mongoose.model('File', fileSchema);
module.exports = File;
