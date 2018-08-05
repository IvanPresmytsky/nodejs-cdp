'use strict';


/**
 * Add a new product
 *
 * body Product Product object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addProduct = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a product
 *
 * productId String Product id to delete
 * no response value expected for this operation
 **/
exports.deleteProduct = function(productId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find all products
 * Returns a single product
 *
 * returns Product
 **/
exports.getAllProducts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reviews" : {
    "title" : "title"
  },
  "lastModifiedDate" : "lastModifiedDate",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find product by ID
 * Returns a single product
 *
 * productId String ID of product to return
 * returns Product
 **/
exports.getProductById = function(productId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "reviews" : {
    "title" : "title"
  },
  "lastModifiedDate" : "lastModifiedDate",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

