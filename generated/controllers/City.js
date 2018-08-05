'use strict';

var utils = require('../utils/writer.js');
var City = require('../service/CityService');

module.exports.addCity = function addCity (req, res, next) {
  var body = req.swagger.params['body'].value;
  City.addCity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCity = function deleteCity (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  City.deleteCity(cityId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllCities = function getAllCities (req, res, next) {
  City.getAllCities()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCity = function updateCity (req, res, next) {
  var cityId = req.swagger.params['cityId'].value;
  var body = req.swagger.params['body'].value;
  City.updateCity(cityId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
