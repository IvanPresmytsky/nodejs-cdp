const colors = require('colors');
const EventEmmiter = require('events').EventEmitter;
const flatten = require('array-flatten');

class Commander extends EventEmmiter {
  constructor(props) {
    super(props);
    this.actions = props.actions  || [];
    this.actionsWithoutArgs =  props.actionsWithoutArgs || [];
    this.command = props.command;
    this.name = props.name;
    this.shortcut = props.shortcut;
    this.argsFlags = props.argsFlags || [];
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

  hasHelpArg(args) {
    const helpName = '--help';
    const helpShortcut = '-h';
    const firstArg = args[0];

    return firstArg === helpName || firstArg === helpShortcut;
  }

  getArg(args, name, shortcut) {
    const firstArg = args.length && args[0];
    
    if (!firstArg) return null;
    if ((firstArg === shortcut || firstArg === name) && args[1]) return args[1]

    return null;
  }

  getActionsArg(args, action, argsFlags) {
    const actionsArgFlagIndex = args.indexOf(action) + 1;
    const { name, shortcut } = argsFlags;

    return this.getArg(args.slice(actionsArgFlagIndex), name, shortcut);
  }

  showHelp(isAlert, alertMessage = '') {
    const actionText = `Use ${this.name} or ${this.shortcut} with following args:`;
    const actionsArgsText = this.actions.join(', ');
    const argsForActionText = `To pass argumets to action use ${this.argsFlags[0].name} or ${this.argsFlags[0].shortcut}`;
    const nextLine = '\n';

    const text = [
      alertMessage,
      actionText,
      actionsArgsText,
      argsForActionText,
      nextLine
    ].join(nextLine);

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
      this.showHelp(true, 'No arguments were passed!');
      return;
    }

    const isHelp = this.hasHelpArg(normalized);

    if (isHelp) {
      this.showHelp();
      return;
    }

    const action = this.getArg(normalized, this.name, this.shortcut);
    const validAction = action && this.actions.find((item) => item === action);

    if (!validAction) {
      this.showHelp(true, 'Incorrect action was passed!');
      return;
    }
    const isArgNeeded = this.actionsWithoutArgs.indexOf(validAction) === -1;
    if (isArgNeeded) {
      const actionArg = this.getActionsArg(normalized, validAction, this.argsFlags[0]);
  
      if (!actionArg) {
        this.showHelp(true, 'Incorrect flag for actions argument was used!');
        return
      }
      this.command(action, actionArg);
    } else {
      this.command(action);
    }

  }
}

module.exports = Commander;
