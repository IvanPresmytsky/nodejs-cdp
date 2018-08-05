'use strict';


/**
 * Add a new city
 *
 * body City City object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addCity = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a city
 *
 * cityId String City id to delete
 * no response value expected for this operation
 **/
exports.deleteCity = function(cityId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find all cities
 * Returns all cities
 *
 * returns City
 **/
exports.getAllCities = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "country" : "country",
  "capital" : true,
  "lastModifiedDate" : "lastModifiedDate",
  "name" : "name",
  "location" : {
    "lat" : "lat",
    "long" : "long"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updated city
 * Updates the city.
 *
 * cityId String id that need to be updated
 * body City Updated city object
 * no response value expected for this operation
 **/
exports.updateCity = function(cityId,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

