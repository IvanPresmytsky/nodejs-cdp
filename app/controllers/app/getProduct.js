const data = require('../../fakeDB/db.js');
const getById = require('../../helpers');

const getProduct = (req, res) => {
  const product = data.products && getById(data.products, req.params.id);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(product);
};

module.exports = getProduct;
