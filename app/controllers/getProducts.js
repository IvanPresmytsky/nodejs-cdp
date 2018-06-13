const data = require('../fakeDB/db.js');

const getProducts = (req, res) => {
  const products = data.products;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(products);
};

module.exports = getProducts;
