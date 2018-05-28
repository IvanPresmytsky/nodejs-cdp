const fs = require('fs');
const csv = require('csvtojson');
const path = require('path');

function buildPathToConvertedFie(filePath) {
  const fileName = path.basename(filePath, 'csv');;
  const dirName = path.dirname(filePath);
  return path.resolve(dirName, `${fileName}json`);
}

function csvConverter(file, outputFile) {
  csv()
    .fromFile(file)
    .then(jsonObj => {
      const stream = fs.createWriteStream(outputFile);
      stream.once('open', () => {
        const data = JSON.stringify(jsonObj);
        stream.write(data);
        stream.end();
      });
    })
    .catch(error => console.log(error));
}

function convertToFile(filePath) {
  const fileExt = path.extname(filePath);

  if (fileExt !== '.csv') {
    throw new Error('Incorrect file extension was passed!');
  }

  const outputFilePath = buildPathToConvertedFie(filePath);

  console.log(`converting data csv from file ${filePath} to ${outputFilePath}...`);
  csvConverter(filePath, outputFilePath);
}

module.exports = convertToFile;
