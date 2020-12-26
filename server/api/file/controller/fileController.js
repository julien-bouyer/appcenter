const jwt = require('jsonwebtoken');
const File = require('../model/File');
const utf8 = require('utf8');

exports.find = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await File.findById(id);
    if (!data) {
      return res.status(401).json({
        message: `File not found for id [${id}]`,
      });
    }
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await File.find();
    res.status(201).json({ data });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Cannot get all files' });
  }
};

exports.save = async (req, res) => {
  try {
    let file;
    const id = req.params.id;
    if (id) {
      file = await File.findById(id);
      if (!file) {
        return res.status(404).json({ message: `File not found for id [${id}]` });
      }
    }
    if (!file) {
      file = new File();
    }
    file.name = req.body.name;
    file.secret = req.body.secret;
    let data = await file.save();
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.delete = async (req, res) => {
  try {
    let data = await File.deleteOne({ _id: req.params.id });
    res.status(201).json({ data });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.publish = async (req, res) => {
  try {
    const id = req.params.id;
    let file = await File.findById(id);
    if (!file) {
      return res.status(404).json({ error: `File not found for id [${id}]` });
    }
    const generatedJwt = await file.generateJwt();
    res.status(200).json({ file, generatedJwt });
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.download = async (req, res) => {
  const encodedToken = req.params.token;
  const token = utf8.decode(encodedToken);
  const secret = req.body.secret;
  try {
    jwt.verify(token, secret, { issuer: 'appcenter' });
  } catch (error) {
    console.error(error);
    return res.status(403).json({ name: error.name, message: 'JWT invalid' });
  }
  try {
    var decoded = jwt.decode(token);
    let file = await File.findById(decoded.id);
    if (!file) {
      return res.status(404).json({ message: `File not found` });
    }
    const directoryPath = process.env.STORAGE_DIR;
    const filename = file.name;
    res.download(directoryPath + filename, filename, error => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: 'Could not download the file.' });
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
};
