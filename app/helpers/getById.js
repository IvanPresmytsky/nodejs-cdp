const _ = require('lodash');

module.exports = (arr, Id) => _.find(arr, { id: Id });
