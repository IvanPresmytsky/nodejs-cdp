const fs = require('fs');
const csv = require('csvtojson');
const path = require('path');

function csvConverter(file) {
  csv()
    .fromFile(file)
    .pipe(process.stdout);
}

function convertFromFile(filePath) {
  const fileExt = path.extname(filePath);

  if (fileExt !== '.csv') {
    throw new Error('Incorrect file extension was passed!');
  }

  console.log(`converting data csv from file ${filePath} to stdout...`);
  csvConverter(filePath);
}

module.exports = convertFromFile;
