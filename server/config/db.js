module.exports = {
  database: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  secret: process.env.DB_SECRET,
};
