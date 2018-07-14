const passport = require('passport');

const {
  getProduct,
  getProducts,
  getProductReviews,
  getUser,
  getUsers,
  postProducts
} = require('../controllers/app');

const authenticate = require('./authRoutes');

require('../config/passportJWTStrategy');

const verify = passport.authenticate('jwt', { session: false });
  
const routes = app => {
  app.route('/api/products')
    .post(postProducts)
    .get(getProducts);
  
  app.route('/api/products/:id')
    .get(getProduct);
  
  app.route('/api/products/:id/reviews')
    .get(getProductReviews);
  
  app.route('/api/users')
    .get(getUsers);
  
  app.route('/api/users/:id')
    .get(getUser);

  app.use('/auth', authenticate);
};
  
module.exports = routes;
