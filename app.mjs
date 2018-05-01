import DirWatcher from './dirwatcher/DirWatcher';
import Importer from './importer/Importer.mjs';
import EventEmitter from 'events';

const dirwatcher = new DirWatcher();
const x = dirwatcher.watch('./data', 1000);

const importer = new Importer(x);
importer.listenWatcher();

setTimeout(() => {
  const importedFileAsync = importer.import('./data/file.csv')
    .then(data => {
      console.log('importedFileAsync: ', data);
    });
  const importedFile = importer.importSync('./data/file.js');
  console.log('importedFile: ', importedFile);
  dirwatcher.stopWatching();
}, 20000);


