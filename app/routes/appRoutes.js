const {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductReviews,
} = require('../controllers/products');

const {
  deleteUser,
  getAllUsers,
  getUser,
} = require('../controllers/users');

const {
  addCity,
  deleteCity,
  getAllCities,
  updateCity,
} = require('../controllers/cities');
  
const routes = app => {
  app.route('/api/products')
    .post(addProduct)
    .get(getAllProducts);

  app.route('/api/cities')
    .post(addCity)
    .get(getAllCities);
  
  app.route('/api/cities/:id')
    .put(updateCity)
    .delete(deleteCity);
  
  app.route('/api/products/:id')
    .get(getProductById)
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
