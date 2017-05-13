const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const mySolution = require('./').hammingDistance;
const otherSolution = require('./otherSolution');

suite
  .add('MySolution', () => {
    mySolution(53, 28);
  })
  .add('OtherSolution', () => {
    otherSolution(53, 28);
  })
  .on('cycle', (e) => {
    console.log(String(e.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
