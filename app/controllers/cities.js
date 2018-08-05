const { Cities } = require('../models');
const {
  deleteById,
  getAll,
  addItem,
  updateItem
} = require('../helpers');

exports.getAllCities = getAll(Cities);

exports.addCity = addItem(Cities);

exports.updateCity = updateItem(Cities);

exports.deleteCity = deleteById(Cities);
