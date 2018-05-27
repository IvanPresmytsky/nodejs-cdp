const fs = require('fs');

function outputFile(filePath) {
  console.log(`reading data from file ${filePath} ...`);
  fs.createReadStream(filePath)
  .on('error', function(error) {
    console.error(error);
  })
  .pipe(process.stdout);
}

module.exports = outputFile;
