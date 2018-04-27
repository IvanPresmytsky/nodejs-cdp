import fs from 'fs';

export default class Importer {
  constructor(emitter) {
    this.emitter = emitter;
    this.data = [];
  }

  listenWatcher() {
    this.emitter.on('dirwatcher:changed', (dir) => {
      console.log('handle changing!');
      dir.forEach(file => {
        const content = fs.readFileSync(file); 
        this.data.push({ [file]: content });
      });
    });
  }

  importSync(file) {
    console.log('importing');
    console.log(this.data);
    return this.data.find(item => item[file]);
  }
};
