const { Products } = require('../models');
const {
  deleteById,
  getAll,
  getById,
  getItemProps,
  addItem
} = require('../helpers');

exports.getAllProducts = getAll(Products);

exports.getProductById = getById(Products);

exports.getProductReviews = getItemProps(Products, 'reviews');

exports.addProduct = addItem(Products);

exports.deleteProduct = deleteById(Products);
