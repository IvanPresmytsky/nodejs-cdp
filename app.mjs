import DirWatcher from './dirwatcher/DirWatcher';
import Importer from './importer/Importer.mjs';
import EventEmitter from 'events';

const dirwatcher = new DirWatcher();
const x = dirwatcher.watch('./data', 500);

const importer = new Importer(x);
importer.listenWatcher();

setTimeout(() => {
  importer.importSync();
}, 5000);

