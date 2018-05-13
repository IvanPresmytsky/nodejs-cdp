const program = require('commander');
const colors = require('colors');

function reverse(str) {
  console.log('reversing...');
}

function transform(str) {
  console.log('transforming...');
}

function outputFile(filePath) {
  console.log('output file...');
}

function convertFromFile(filePath) {
  console.log('converting from file...');
}

function convertToFile(filePath) {
  console.log('converting to file...');
}

function make_red(txt) {
    return colors.red(txt);
}

program
  .version('0.1.0', '-v, --version')
  .option('-r, --reverse', 'reverse file', reverse)
  .option('-t, --transform', 'transform file', transform)
  .option('-c, --convert-from-file', 'convert from file', convertFromFile)
  .option('-o, --output-file', 'output file', outputFile)
  .option('-f, --convert-to-file', 'convert to file', convertToFile);
  
program.on('--help', function(){
  console.log('Examples: ');
});

if (!process.argv.slice(2).length) {
  program.outputHelp(make_red);
}

program.parse(process.argv);
