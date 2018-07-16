'use strict';
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      primaryKey: true,
    },
    reviews: DataTypes.ARRAY(DataTypes.TEXT),
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};