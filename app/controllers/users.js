const { Users } = require('../models');
const {
  deleteById,
  getAll,
  getById
} = require('../helpers');

exports.getAllUsers = getAll(Users);

exports.getUserById = getById(Users);

exports.deleteUser = deleteById(Users);
