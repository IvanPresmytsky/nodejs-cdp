import fs from 'fs';
import path from 'path';
import EventEmitter from 'events';

export default class DirWatcher {
  constructor() {
    this.cashedData = [];
    this.changedData = [];
    this.timer;
  }

  customWatcher(customWatcher, dirPath) {
    const dir = fs.readdirSync(dirPath).map(file => path.resolve(dirPath, file));

    if (!this.cashedData.length) {
      this.cashedData = dir;
      this.changedData = dir;
    } else {
      this.changedData = dir.filter(file => {
        return file !== this.cashedData.find(item => item === file);
      });
      this.cashedData = dir;
      console.log('changedData: ', this.changedData);
    }

    if (this.changedData.length) {
      customWatcher.emit('dirwatcher:changed', this.changedData);
    }
  }

  watch(dirPath, delay) {
    console.log(`start watching "${dirPath}"${delay && ` with delay: ${delay}`}`);
    const customWatcher = new EventEmitter();

    setTimeout(() => {
      console.log(`start watching "${dirPath}"`);
      this.timer = setInterval(() => {
        try {
          this.customWatcher(customWatcher, dirPath);
        } catch (error) {
          console.log('ERROR: ', error);
        }
      }, 200);  
    }, delay);

    return customWatcher;
  }

  stopWatching() {
    clearInterval(this.timer);
  }
  
};
