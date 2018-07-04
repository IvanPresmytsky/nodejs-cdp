const data = require('../../fakeDB/db.js');
const getById = require('../../helpers');

const checkProduct = (req, res) => {
  const product = data.products && getById(data.products, req.params.id);
  if (!product) {
    res.status(404)
      json({message: `product with id ${req.params.id} not found`});
  }
  next();
};

module.exports = checkProduct;
