const { Products } = require('../models');
const {
  deleteById,
  getAll,
  getById,
  getItemProps,
  postItem
} = require('../helpers');

exports.getAllProducts = getAll(Products);

exports.getProductById = getById(Products);

exports.getProductReviews = getItemProps(Products, 'reviews');

exports.addProduct = postItem(Products);

exports.deleteProduct = deleteById(Products);
