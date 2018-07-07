const data = require('../../fakeDB/db.js');
const { getById } = require('../../helpers');

const checkProductReviews = (req, res, next) => {
  const product = data.products && getById(data.products, req.params.id);
  const reviews = product && product.reviews;
  if (!reviews) {
    res.status(404)
      .json({message: `reviews for product with id ${req.params.id} not found`});
  }
  next();
};

module.exports = checkProductReviews;
