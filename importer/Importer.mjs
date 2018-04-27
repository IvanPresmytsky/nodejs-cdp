export default class Importer {
  constructor(emitter) {
    console.log('Importer');
    this.emitter = emitter;
    this.data = [];
  }

  listenWatcher() {
    this.emitter.on('dirwatcher:changed', (path) => {
      console.log('handle changing!');
      console.log('path: ', path);
      this.data.push(path);
    });
  }

  importSync() {
    console.log('importing');
    console.log(this.data);
  }
};
