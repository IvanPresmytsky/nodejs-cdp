const {
  checkUser,
  checkUsers,
  checkProduct,
  checkProducts,
  checkProductReviews,
  getProduct,
  getProducts,
  getProductReviews,
  getUser,
  getUsers,
  postProducts
} = require('../controllers');

const routes = app => {
  app.route('/api/products')
    .all(checkProducts)
    .post(postProducts)
    .get(getProducts);

  app.route('/api/products/:id')
    .all(checkProduct)
    .get(getProduct);

  app.route('/api/products/:id/reviews')
    .all(checkProductReviews)
    .get(getProductReviews);

  app.route('/api/users')
    .all(checkUsers)
    .get(getUsers);

  app.route('/api/users/:id')
    .all(checkUser)
    .get(getUser);
};

module.exports = routes;
