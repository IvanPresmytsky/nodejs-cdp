const { Product } = require('../../models');

const postProducts = (req, res) => {
  const product = req.body;
  data.products && data.products.push(product);
  res.status(204).send({ message: 'product was posted successfully' });

  return Product
    .create({
      name: req.body.name,
      reviews: req.body.reviews,
    })
    .then(product => res.status(201).send(product))
    .catch(error => res.status(400).send(error));
};

module.exports = postProducts;
