const Commander = require('./commander');
const colors = require('colors');

const {
  actionNames,
  flagNames,
  shortcutsNames
} = require('../constants');

const actions = {
  reverse: {
    name: actionNames.REVERSE,
    flag: null,
    shortcut: null,
  },
  transform: {
    name: actionNames.TRANSFORM,
    flag: null,
    shortcut: null,
  },
  outputFile: {
    name: actionNames.OUTPUT_FILE,
    flag: flagNames.FILE,
    shortcut: shortcutsNames.F,
  },
  convertFromFile: {
    name: actionNames.CONVERT_FROM_FILE,
    flag: flagNames.FILE,
    shortcut: shortcutsNames.F,
  },
  convertToFile: {
    name: actionNames.CONVERT_TO_FILE,
    flag: flagNames.FILE,
    shortcut: shortcutsNames.F,
  },
  bundleCss: {
    name: actionNames.BUNDLE_CSS,
    flag: flagNames.PATH,
    shortcut: shortcutsNames.P,
  }
};

const {
  convertFromFile,
  convertToFile,
  cssBundler,
  outputFile,
  reverse,
  transform,
} = require('../actions');

function action(action, actionArgument) {
  switch (action) {
    case actionNames.BUNDLE_CSS:
      actionArgument && cssBundler(actionArgument);
      break;
    case actionNames.REVERSE:
      reverse();
      break;
    case actionNames.TRANSFORM:
      transform();
      break;
    case actionNames.OUTPUT_FILE:
      actionArgument && outputFile(actionArgument);
      break;
    case actionNames.CONVERT_FROM_FILE:
      actionArgument && convertFromFile(actionArgument);
      break;
    case actionNames.CONVERT_TO_FILE:
      actionArgument && convertToFile(actionArgument);
      break;
    default:
      break;
  }
}

const commander = new Commander({
  actions,
  command: action,
  name: flagNames.ACTION,
  shortcut: shortcutsNames.A,
});

commander.parse(process.argv);
