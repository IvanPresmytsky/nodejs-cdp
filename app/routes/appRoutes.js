const {
  deleteProduct,
  getAllProducts,
  getProduct,
  getProductReviews,
  postProducts,
} = require('../controllers/products');

const {
  deleteUser,
  getAllUsers,
  getUser,
} = require('../controllers/users');

const {
  deleteCity,
  getAllCities,
  postCities,
  updateCity,
} = require('../controllers/cities');
  
const routes = app => {
  app.route('/api/products')
    .post(postProducts)
    .get(getAllProducts);

  app.route('/api/cities')
    .post(postCities)
    .get(getAllCities);
  
  app.route('/api/cities/:id')
    .put(updateCity)
    .delete(deleteCity);
  
  app.route('/api/products/:id')
    .get(getProduct)
    .delete(deleteProduct);
  
  app.route('/api/products/:id/reviews')
    .get(getProductReviews);
  
  app.route('/api/users')
    .get(getAllUsers)
  
  app.route('/api/users/:id')
    .get(getUser)
    .delete(deleteUser);
};
  
module.exports = routes;
