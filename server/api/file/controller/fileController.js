const File = require('../model/File');

exports.find = async (req, res) => {
  try {
    let data;
    if (req.params.id) {
      data = await File.findOne({
        _id: req.params.id,
      });
    } else {
      data = await File.find();
    }
    if (!data) {
      return res.status(401).json({
        error: 'No file found',
      });
    }
    res.status(201).json({ data });
  } catch (err) {
    res.status(400).json({ err });
  }
};

exports.save = async (req, res) => {
  try {
    let file;
    if (req.params.id) {
      file = await File.findById(req.params.id);
      file.jwt = 'jwt-updated';
      if (!file) {
        return res.status(404).json({
          message: `file not found for id [${req.params.id}]`,
        });
      }
    }
    if (!file) {
      file = new File();
      file.url = 'https://there.com/f/jwtgenerated/';
      file.jwt = 'jwt-generated';
      file.secret = 'my-secret';
      file.scope = 'ADMIN';
    }
    file.name = req.body.name;
    file.path = req.body.path;
    let data = await file.save();
    res.status(201).json({ data });
  } catch (err) {
    res.status(400).json({ err });
  }
};

exports.delete = async (req, res) => {
  console.log('delete', req.params);
  try {
    let data = await File.deleteOne({ _id: req.params.id });
    res.status(201).json({ data });
  } catch (err) {
    res.status(400).json({ err });
  }
};
