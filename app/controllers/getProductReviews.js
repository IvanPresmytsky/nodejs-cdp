const data = require('../fakeDB/db.js');
const { getById } = require('../helpers');

const getProductReviews = (req, res) => {
  const product = data.products && getById(data.products, req.params.id);
  const reviews = product && product.reviews;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(JSON.stringify(reviews));
};

module.exports = getProductReviews;
