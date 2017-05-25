const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  maxConsecutiveOnes,
  alternativeSolution,
  arraySolution,
} = myModule;

const array = [1, 1, 1, 0, 1, 1, 1, 1, 1, 0];

suite
  .add('MySolution', () => {
    maxConsecutiveOnes(array);
  })
  .add('Alternative Solution', () => {
    alternativeSolution(array);
  })
  .add('Array solution', () => {
    arraySolution(array);
  })
  .on('cycle', (e) => {
    console.log(String(e.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));

    const smallest = Math.min(this[0].hz, this[1].hz, this[2].hz);
    const largest = Math.max(this[0].hz, this[1].hz, this[2].hz);

    const percentage = (Math.abs(largest - smallest) / largest) * 100;
    console.log(`${Math.floor(percentage)}% faster`);
  })
  .run({ async: true });
