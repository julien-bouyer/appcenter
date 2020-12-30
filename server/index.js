const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');
const cors = require('cors');
// const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/db');
const path = require('path');
const app = express();

// load the banner
require('./config/banner');

// configure database and mongoose
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose
  .connect(config.database, {
    auth: {
      authSource: 'admin',
    },
    user: config.user,
    pass: config.password,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('** Database is connected');
  })
  .catch(error => {
    console.log({ database_error: error });
  });

// registering cors
var allowedOrigins = [process.env.FRONTAPP_URI, 'http://192.168.1.73:3000'];
app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin only in dev mode
      // (like mobile apps or curl requests)
      if (process.env.NODE_ENV !== 'production' && !origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure body-parser ends here
app.use(morgan('dev')); // configure morgan

// app.use(
//   history({
//     verbose: true,
//   })
// );
app.use('/', express.static(path.join(__dirname, 'public')));

// routes
const userRoutes = require('./api/user/route/user');
const fileRoutes = require('./api/file/route/file');
const downloadRoutes = require('./api/download/route/download');
app.use('/api/user', userRoutes);
app.use('/api/file', fileRoutes);
app.use('/d', downloadRoutes);

app.listen(PORT, () => {
  console.log(`** App is running on ${PORT}\n`);
});
