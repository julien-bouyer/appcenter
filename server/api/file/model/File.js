const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const utf8 = require('utf8');

const fileSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please include a name'],
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
  const generatedJwt = jwt.sign({ id: file._id }, file.secret, { issuer: 'appcenter', expiresIn: '7 days' });
  file.jwt = utf8.encode(generatedJwt);
  file.url = `${process.env.SERVER_URI}/download/${file.jwt}`;
  await file.save();
  return generatedJwt;
};

const File = mongoose.model('File', fileSchema);
module.exports = File;
