'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    id: DataTypes.STRING,
    reviews: DataTypes.ARRAY
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};