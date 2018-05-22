const Commander = require('./commander');

const colors = require('colors');
const actionNames = {
  REVERSE: 'reverse',
  TRANSFORM: 'transform',
  OUTPUT_FILE: 'outputFile',
  CONVERT_FROM_FILE: 'convertFromFile',
  CONVERT_TO_FILE: 'convertToFile'
}

function reverse() {
  console.log('Reversing...');
  process.stdin.pipe(process.stdout);
}

function transform(str) {
  console.log('transforming... ' + str);
}

function outputFile(filePath) {
  console.log('output file... ' + filePath);
}

function convertFromFile(filePath) {
  console.log('converting from file...' + filePath);
}

function convertToFile(filePath) {
  console.log('converting to file... ' + filePath);
}

function make_red(txt) {
  return colors.red(txt);
}

function action(action, actionArgument) {
    switch (action) {
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