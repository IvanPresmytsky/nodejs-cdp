require("babel-register")({
  presets: ['env', 'stage-2']
});

module.exports = require('./start.js');
