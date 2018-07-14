const { Product } = require('../../models');

const getProducts = (req, res) => {
  return Product
    .findAll()
    .then(products => res.status(200).send(products))
    .catch(error => res.status(400).send(error));
};

module.exports = getProducts;
