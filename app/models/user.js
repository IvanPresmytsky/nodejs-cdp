const db = require('..db/');
const { sequelize, Sequelize } = db;

const User = sequelize.define('User', {
  id: Sequelize.STRING,
  name: Sequelize.STRING,
  password: Sequelize.STRING,
});

module.exports = User;
