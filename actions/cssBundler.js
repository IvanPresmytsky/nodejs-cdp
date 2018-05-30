var promisify = require("promisify-node");
const path = require('path');
const fs = promisify('fs');

function cssBundler(dirPath) {
  console.log(`bundling files from the ${dirPath} to the bundle.css...`);
  fs.readdir(dirPath)
    .then(files => files.map(file => {
      const fileExt = path.extname(file);

      if (fileExt !== '.css') {
        return null;
      }

      const pathToFile = path.resolve(dirPath, file);
      return fs.readFile(pathToFile).then(data => data.toString());
    }).filter(item => item))
    .then(files => {
      const tail = fs.readFile(path.resolve('files/fileFromDisk.css')).then(data => data.toString());
      files.push(tail);
      return Promise.all(files);
    })
    .then(data => {
      const pathToBundle = path.resolve('files/bundle.css');
      const stream = fs.createWriteStream(pathToBundle);
      stream.once('open', () => {
        stream.write(data.join('\n'));
        stream.end();
      });
    })
    .catch(error => console.error(error));
}
  
module.exports = cssBundler;
