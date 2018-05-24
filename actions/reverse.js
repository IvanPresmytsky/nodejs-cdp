function reverse() {
  console.log('Start reversing data from stdin to stdout...');
  process.stdin.pipe(process.stdout);
}

module.exports = reverse;
