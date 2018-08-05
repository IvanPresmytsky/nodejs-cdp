'use strict';

var utils = require('../utils/writer.js');
var UserId = require('../service/UserIdService');

module.exports.getUserById = function getUserById (req, res, next) {
  var userId = req.swagger.params['userId'].value;
  UserId.getUserById(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
