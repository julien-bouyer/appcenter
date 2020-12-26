const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

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

fileSchema.methods.generateJwt = async () => {
  const file = this;
  const generatedJwt = jwt.sign({ _id: file._id, name: file.name }, file.secret, { issuer: 'appcenter', expiresIn: '7 days' });
  file.jwt = generatedJwt;
  await file.save();
  return generatedJwt;
};

fileSchema.statics.verifyJwt = async (token, secret) => {
  const file = this.findOne({ jwt: token });
  if (!file) {
    return false;
  }
  const decoded = jwt.verify(token, secret);
  console.log(decoded);
};

const File = mongoose.model('File', fileSchema);
module.exports = File;
