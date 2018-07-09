const db = require('..db/');
const { sequelize, Sequelize } = db;

const Product = sequelize.define('Product', {
  id: Sequelize.STRING,
  name: Sequelize.STRING,
  reviews: Sequelize.ARRAY(Sequelize.TEXT)
});

module.exports = Product;
