const fs = require('fs');
const csv = require('csvtojson');

function csvConverter(file) {
  csv()
    .fromFile(file)
/*    .on('end_parsed', jsonArrObj => {
      console.log(jsonArrObj);
      this.push(jsonArrObj);
    })
    .on('done', error => {
      console.log('end');
    })*/
    .then((jsonObj) => {
      console.log(jsonObj);
      return jsonObj;
    })
    /*.pipe(process.stdout)*/
}

function convertFromFile(filePath) {
  console.log('converting from file...' + filePath);
  csvConverter(filePath);
}

module.exports = convertFromFile;
