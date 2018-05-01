import fs from 'fs';
import path from 'path';
import csv from 'csvtojson';

export default class Importer {
  constructor(emitter) {
    this.emitter = emitter;
    this.data = [];
  }

  csvConverter(file) {
    csv()
    .fromFile(file)
    .on('end_parsed', jsonArrObj => {
      this.data.push({ [file]: jsonArrObj });
    })
    .on('done', error => {
      console.log('end');
    });
  }

  listenWatcher() {
    this.emitter.on('dirwatcher:changed', (dir) => {
      console.log('handle changing!');
      dir.forEach(file => {
        const fileExt = path.extname(file);
        if (fileExt === '.csv') {
          this.csvConverter(file);
        } else {
          const content = fs.readFileSync(file);
          this.data.push({ [file]: content });
        }     
      });
    });
  }

  import(file) {
    console.log('importing async...');
    return new Promise((resolve, reject) => {
      const fileContent = this.data.find(item => item[path.resolve(file)]);
      if (!fileContent) {
        reject(err);
      }
      resolve(fileContent);
    });
  }

  importSync(file) {
    console.log('importing sync...');
    console.log('data: ', this.data);
    return this.data.find(item => item[path.resolve(file)]);
  }
};
