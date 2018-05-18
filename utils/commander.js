const colors = require('colors');
const EventEmmiter = require('events').EventEmitter;
const flatten = require('array-flatten');

class Commander extends EventEmmiter {
  constructor(props) {
    super(props);
    this.actions = props.actions  || [];
    this.command = props.command;
    this.name = props.name;
    this.shortcut = props.shortcut;
    this._args = props.args || [];
  }
 
  normalizeArgs(args) {
    if (!args || args.length < 3) return null;
    const parsedArgs = args.slice(2);
    
    const normalized = parsedArgs.map((item) => {
      if (item.indexOf('=') > 0 && item.lastIndexOf('=') === item.indexOf('=')) {
        return item.split('=');
      }
      return item;
    });

    return flatten(normalized);
  }

  getArg(args, name, shortcut) {
    const firstArg = args.length && args[0];
    
    if (!firstArg) return null;
    if ((firstArg === shortcut || firstArg === name) && args[1]) return args[1]

    return null;
  }

  showHelp(isAlert) {
    const text = 'HELP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!';
    const message = isAlert
      ? this.make_red(text)
      : text;

    process.stdout.write(message);
  }

  make_red(txt) {
    return colors.red(txt);
  }

  parse(argv) {
    const normalized = this.normalizeArgs(argv);

    if (!normalized) {
      this.showHelp();
      return;
    }

    const action = this.getArg(normalized, this.name, this.shortcut);
    const validAction = action && this.actions.find((item) => item === action);

    if (!validAction) {
      this.showHelp();
      return;
    }

    const actionArg = this.getArg(normalized.slice(normalized.indexOf(validAction) + 1), this._args[0], this._args[1]);

    if (!actionArg) {
      this.showHelp(true);
    }

    this.command(action, actionArg);
  }
}

module.exports = Commander;
