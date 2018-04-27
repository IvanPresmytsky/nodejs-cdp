import fs from 'fs';
import EventEmitter from 'events';

export default class DirWatcher {
  constructor() {
    console.log('DirWatcher');
    this.cashedData = [];
    this.changedData = [];
    this.timer;
  }

  watch(path, interval) {
    console.log(`start watching "${path}"`);
    const customWatcher = new EventEmitter();
    this.timer = setInterval(() => {
      try {
        const dir = fs.readdirSync(path).map(file => `${path}/${file}`);
        console.log('dir: ', dir);
        if (!this.cashedData.length) {
          this.cashedData = dir;
          this.changedData = dir;
        } else {
          this.changedData = dir.filter(file => {
            return file !== this.cashedData.find(item => item === file);
          });
          this.cashedData = dir;
        }
        console.log('changedData: ', this.changedData);
        if (this.changedData.length) {
          customWatcher.emit('dirwatcher:changed', this.changedData);  
        }
      } catch (error) {
        console.log('ERROR: ', error);
      }
    }, interval);
    return customWatcher;
  }

  stopWatching() {
    clearInterval(this.timer);
  }
  
};
