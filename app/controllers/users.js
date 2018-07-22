const { Users } = require('../models');
const {
  deleteById,
  getAll,
  getById
} = require('../helpers');

exports.getAllUsers = getAll(Users);

exports.getUser = getById(Users);

exports.deleteUser = deleteById(Users);
