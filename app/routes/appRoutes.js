const passport = require('passport');

const {
  checkUser,
  checkUsers,
  checkProduct,
  checkProducts,
  checkProductReview,
  getProduct,
  getProducts,
  getProductReview,
  getUser,
  getUsers,
  postProducts
} = require('../controllers/app');

require('../config/passwordJWTStrategy');

const verify = passport.authenticate('jwt', { session: false });
  
const routes = app => {
  app.route('/api/products')
    all(checkProducts)
    post(verify, postProducts)
    get(verify, getProducts);
  
  app.route('/api/products/:id')
    all(checkProduct)
    get(verify, getProduct);
  
  app.route('/api/products/:id/reviews')
    all(checkProductReview)
    get(verify, getProductReview);
  
  app.route('/api/users')
    all(checkUsers)
    get(verify, getUsers);
  
  app.route('/api/users/:id')
    all(checkUser)
    get(verify, getUser);
};
  
module.exports = routes;
