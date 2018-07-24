const { Cities } = require('../models');
const {
  deleteById,
  getAll,
  postItem,
  updateItem
} = require('../helpers');

exports.getAllCities = getAll(Cities);

exports.addCity = postItem(Cities);

exports.updateCity = updateItem(Cities);

exports.deleteCity = deleteById(Cities);
