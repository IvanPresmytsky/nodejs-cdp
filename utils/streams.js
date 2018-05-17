const program = require('commander');
const commander = require('./customCommander');

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

function action(action) {
  console.log(commander.parse(process.argv));
  const validAction = actions.find((item) => item === action);
  const processArgs = process.argv.slice(2);

  if(!validAction) {
    program.outputHelp(make_red);
  }
 
  const actionArgument = processArgs.find((item) => item === actionsArgs[0] || item === actionsArgs[1])
    ? processArgs[3]
    : null;

  if (actionArgument) {
    switch (validAction) {
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
  console.log('processArgs', processArgs);
  console.log('actionArgument', actionArgument);
  console.log('validAction', validAction);
}

function file(file) {

}

program
  .version('0.1.0', '-v, --version')
  .option('-a, --action <action>', 'call action code', action)
  .option('-f, --file <file>', 'add argument to action', file);

program.on('--help', function(){
  console.log('Examples: ');
});

if (!process.argv.slice(2).length) {
  program.outputHelp(make_red);
}

program.parse(process.argv);
