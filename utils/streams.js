const Commander = require('./commander');

const colors = require('colors');
const actionNames = {
  REVERSE: 'reverse',
  TRANSFORM: 'transform',
  OUTPUT_FILE: 'outputFile',
  CONVERT_FROM_FILE: 'convertFromFile',
  CONVERT_TO_FILE: 'convertToFile'
}
const actions = [
  actionNames.REVERSE,
  actionNames.TRANSFORM,
  actionNames.OUTPUT_FILE,
  actionNames.CONVERT_FROM_FILE,
  actionNames.CONVERT_TO_FILE
];

const actionsArgs = [
  '-f',
  '--file',
];

function reverse(str) {
  console.log('reversing... ' + str);
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
        reverse(actionArgument)
        break;
      case actionNames.TRANSFORM:
        transform(actionArgument)
        break;
      case actionNames.OUTPUT_FILE:
        outputFile(actionArgument)
        break;
      case actionNames.CONVERT_FROM_FILE:
        convertFromFile(actionArgument)
        break;
      case actionNames.CONVERT_TO_FILE:
        convertToFile(actionArgument)
        break;
      default:
        break;
    }
}

const commander = new Commander({
  args: ['--file', '-f'],
  actions,
  command: action,
  name: '--action',
  shortcut: '-a',
});

commander.parse(process.argv);