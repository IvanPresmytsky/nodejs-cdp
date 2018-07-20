const Products = require('../models/product');
const { addLastModified, checkItem } = require('../helpers');

exports.getAllProducts = (req, res) => {
  Products.find({})
    .then(data => res.json(data))
    .catch(err => res.send({ status: 500, error: err }));
};

exports.getProduct = (req, res) => {
    const productId = req.params.id;
    Products.findOne({ id: productId })
      .then(product => res.json(product))
      .catch(err => res.send({ status: 500, error: err }));
};

exports.getProductReviews = (req, res) => {
  const productId = req.params.id;
  Products.findOne({ id: productId })
    .then(product => {
      if (!product.reviews) {
        return res.status(404).send({
          message: `reviews for product with id ${req.params.id} not found`,
        });
      }
      res.json(product.reviews);
    })
    .catch(err => res.send({ status: 500, error: err }));
};

exports.postProducts = (req, res) => {
  const newProduct = new Products({ ...req.body });
    checkItem(Products, newProduct)
      .then(product => addLastModified(Products, product.id))
      .then(product => res.json(product))
      .catch(err => res.send({ status: 500, error: err }));
};

exports.deleteProduct = (req, res) => {
  const productId = req.params.id;

  Products.deleteOne({ id: productId })
    .then((result) => {
      console.log(`deleted ${result.n} documents`);
      res.end();
    })
    .catch(err => res.send({ status: 500, error: err }));
}
