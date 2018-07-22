const { Product } = require('../../models');

const getProduct = (req, res) => {
  return Product
    .findById(req.params.id)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: `product with id ${req.params.id} not found`,
        });
      }
     return res.status(200).send(product);
    })
    .catch(error => res.status(400).send(error));
};

module.exports = getProduct;
