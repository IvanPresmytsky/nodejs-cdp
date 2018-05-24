const Commander = require('./commander');
const colors = require('colors');

const actionNames = {
  REVERSE: 'reverse',
  TRANSFORM: 'transform',
  OUTPUT_FILE: 'outputFile',
  CONVERT_FROM_FILE: 'convertFromFile',
  CONVERT_TO_FILE: 'convertToFile',
  BUNDLE_CSS: 'bundleCss'
}

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

const actions = Object.keys(actionNames).map((item, i) => actionNames[item]);

const commander = new Commander({
  actions,
  actionsWithoutArgs: [actionNames.REVERSE, actionNames.TRANSFORM],
  argsFlags: [
    {
      name: '--file',
      shortcut: '-f',
    },
  ],
  command: action,
  name: '--action',
  shortcut: '-a',
});

commander.parse(process.argv);
