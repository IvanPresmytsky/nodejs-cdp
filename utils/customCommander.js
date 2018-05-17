const EventEmmiter = require('events').EventEmitter;

require('util').inherits(Command, EventEmmiter);

exports = module.exports = new Command();

function Command(name) {
  this.commands = [];
  this.options = [];
  this._execs = {};
  this._allowUnknownOption = false;
  this._args = [];
  this._name = name || '';
}

Command.prototype.parse = function(argv) {
  const parsed = argv.slice(2);
  console.log('parsed: ', parsed);
}
