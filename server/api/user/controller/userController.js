const User = require('../model/User');

exports.find = async (req, res) => {
  try {
    let data;
    if (req.params.id) {
      data = await User.findOne({
        _id: req.params.id,
      });
    } else {
      data = await User.find();
    }
    if (!data) {
      return res.status(401).json({
        error: 'No user found',
      });
    }
    res.status(201).json({ data });
  } catch (err) {
    res.status(400).json({ err });
  }
};

exports.save = async (req, res) => {
  try {
    let user;
    if (req.params.id) {
      user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({
          message: `user not found for id [${req.params.id}]`,
        });
      }
    } else {
      let isUser = await User.find({ email: req.body.email });
      if (isUser.length >= 1) {
        return res.status(409).json({
          message: 'email already in use',
        });
      }
    }
    if (!user) {
      user = new User();
    }
    user.name = req.body.name;
    user.email = req.body.email;
    user.role = req.body.role;
    if (req.body.password) {
      user.password = req.body.password;
    }
    let data = await user.save();
    res.status(201).json({ data });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res.status(401).json({ error: 'Login failed! Check authentication credentials' });
    }
    const token = await user.generateAuthToken();
    res.status(201).json({ user, token });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};
