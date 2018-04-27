import fs from 'fs';
import EventEmitter from 'events';

export default class DirWatcher {
  constructor() {
    console.log('DirWatcher');
  }

  watch(path, interval) {
    console.log(`start watching "${path}"`);
    const customWatchEmitter = new EventEmitter();
    setInterval(() => {
      customWatchEmitter.emit('dirwatcher:changed', path);  
    }, interval);
    return customWatchEmitter;
  }
};
