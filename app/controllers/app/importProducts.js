const { Product } = require('../../models');

const importProducts = (product) => {
  return Product
    .findOrCreate({
      where: { id: product.id },
      defaults: product,
    });
};

module.exports = importProducts;
