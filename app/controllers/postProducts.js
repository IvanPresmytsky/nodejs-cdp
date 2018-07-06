const data = require('../fakeDB/db.js');

const postProducts = (req, res) => {
  const product = req.body;
  data.products && data.products.push(product);
  res.status(204).send({ message: 'product was posted successfully' });
};

module.exports = postProducts;
