module.exports = {
  database: `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`,
  user: process.env.MONGODB_USER,
  password: process.env.MONGODB_PASSWORD,
};
