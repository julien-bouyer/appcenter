const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace('Bearer ', '');

    const decoded = jwt.verify(token, process.env.AUTH_SECRET);
    req.userData = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Authentification Failed',
    });
  }
};
