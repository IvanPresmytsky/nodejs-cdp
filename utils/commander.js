const colors = require('colors');
const EventEmmiter = require('events').EventEmitter;
const flatten = require('array-flatten');
const { flagNames, shortcutsNames } = require('../constants');

class Commander extends EventEmmiter {
  constructor(props) {
    super(props);
    this.actions = props.actions  || {};
    this.command = props.command;
    this.name = props.name;
    this.shortcut = props.shortcut;
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

  hasArg(args, flag, shortcut) {
    const firstArg = args.length && args[0];
    return firstArg === flag || firstArg === shortcut;
  }

  getArg(args, flag, shortcut) {
    const firstArg = args.length && args[0];
    
    if (!firstArg) return null;
    if ((firstArg === shortcut || firstArg === flag) && args[1]) return args[1]

    return null;
  }

  getActionsArg(args, action, flag, shortcut) {
    const actionsArgFlagIndex = args.indexOf(action) + 1;
    return this.getArg(args.slice(actionsArgFlagIndex), flag, shortcut);
  }

  generateHelpMessageForFlagArgs(actions) {
    return Object.keys(actions)
      .map(item => {
        const action = actions[item];
        if (!(action.flag && action.shortcut && action.name)) return null;
        return `To pass argumets to action ${action.name} use ${action.flag} or ${action.shortcut}`;
      })
      .filter(item => item);
  }

  showHelp(isAlert, alertMessage = '') {
    const actionText = `Use ${this.name} or ${this.shortcut} with following args:`;
    const actionsArgsText = Object.keys(this.actions).join(', ');
    const argsForActionMessages = this.generateHelpMessageForFlagArgs(this.actions);
    const nextLine = '\n';

    const text = [
      alertMessage,
      actionText,
      actionsArgsText,
      ...argsForActionMessages,
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

    const isHelp = this.hasArg(normalized, flagNames.HELP, shortcutsNames.H);
    const isAction = this.hasArg(normalized, flagNames.ACTION, shortcutsNames.A);

    if (isHelp) {
      this.showHelp();
      return;
    }

    if (!isAction) {
      this.showHelp(true, '"--action", "-a", "--help", "-h" should be passed as first argument!');
      return;
    }

    const action = this.getArg(normalized, this.name, this.shortcut);
    const validAction = action && this.actions[action];
    const validActionName = validAction && validAction.name;

    if (!validActionName) {
      this.showHelp(true, 'Incorrect action was passed!');
      return;
    }

    const isArgNeeded = validAction.flag || validAction.shortcut;

    if (isArgNeeded) {
      const actionArg = this.getActionsArg(normalized, validActionName, validAction.flag, validAction.shortcut);
  
      if (!actionArg) {
        this.showHelp(true, 'Incorrect flag for action argument was used!');
        return
      }
      this.command(action, actionArg);
    } else {
      this.command(action);
    }

  }
}

module.exports = Commander;
