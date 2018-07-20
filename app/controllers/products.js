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

exports.postProducts = (req, res) => {
  const newProduct = new Products({ ...req.body });
    checkItem(Products, newProduct)
      .then(product => addLastModified(Products, product.id))
      .then(product => res.json(product))
      .catch(err => res.send({ status: 500, error: err }));
};

exports.updateProductById = (req, res) => {
  const productId = req.params.id;

  Products.find({ id: productId })
    .then(product => {
      if (product.length === 0) {
        const newProduct = new Products({ ...req.body });
        return checkItem(Products, newProduct)
          .then(product => res.json(product))
          .catch(err => res.send({ status: 500, error: err }));
        }
      Products.updateOne({ id: productId }, req.body)
        .then((result) => {
          console.log(`modified ${result.nModified} document(s)`);
          return Products.findOne({ id: productId })
            .then(product => addLastModified(Products, product.id))
            .then(product => res.json(product))
            .catch(err => res.send({ status: 500, error: err }));
        })
        .catch(err => console.log(err));
      })
    .catch(err => res.send({ status: 500, error: err }));
};

exports.deleteProductById = (req, res) => {
  const productId = req.params.id;

  Products.deleteOne({ id: productId })
    .then((result) => {
      console.log(`deleted ${result.n} documents`);
      res.end();
    })
    .catch(err => res.send({ status: 500, error: err }));
}