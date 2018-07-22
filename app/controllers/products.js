const { Products } = require('../models');
const {
  deleteById,
  getAll,
  getById,
  getItemProps,
  postItem
} = require('../helpers');

exports.getAllProducts = getAll(Products);

exports.getProduct = getById(Products);

exports.getProductReviews = getItemProps(Products, 'reviews');

exports.postProducts = postItem(Products);

exports.deleteProduct = deleteById(Products);
