const _ = require('lodash');

const getById = (arr, Id) => _.find(arr, { id: Id});

module.exports = getById;
