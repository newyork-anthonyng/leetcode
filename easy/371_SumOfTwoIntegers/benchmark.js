const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  getSum,
  alternativeSolution,
} = myModule;

suite
.add('MyOriginalSolution', () => {
  getSum(100, 122);
})
.add('Alternative Solution: Using regular "+"', () => {
  alternativeSolution(100, 122);
})
.on('cycle', (e) => {
  console.log(String(e.target));
})
.on('complete', function(e) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));

  const smallest = Math.min(this[0].hz, this[1].hz);
  const largest = Math.max(this[0].hz, this[1].hz);

  const percentage = (Math.abs(largest - smallest) / smallest) * 100;
  console.log(`${Math.floor(percentage)}% faster`);
})
.run({ async: true });
