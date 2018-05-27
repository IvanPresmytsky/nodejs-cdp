const through = require('through2');
const stream = through(write, end);

function write (buffer, encoding, next) {
  const transformedData = buffer.toString().toUpperCase();
  this.push(transformedData + '\n');
  next();
}

function end (done) {
  console.log('Finis transforming...');
  done();
}

function transform() {
  console.log('transforming data to upper case...');
  process.stdin.pipe(stream).pipe(process.stdout);
}

module.exports = transform;
