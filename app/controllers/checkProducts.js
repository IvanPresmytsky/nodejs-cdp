const data = require('../fakeDB/db.js');

const checkProducts = (req, res, next) => {
  const products = data.products;
  if (!products) {
    res.status(404)
      json({message: `products not found`});
  }
  next();
};

module.exports = checkProducts;