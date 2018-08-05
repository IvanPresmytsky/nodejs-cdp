'use strict';


/**
 * Delete user by id
 * This can only be done by the logged in user.
 *
 * userId String The id that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function(userId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all users
 * Get the list of the users
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.getAllUsers = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

