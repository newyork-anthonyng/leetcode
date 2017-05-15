const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  arrayPartition,
  moreEfficientSolution,
 } = myModule;

const array = [6214, -2290, 2833, -7908, 100, 101, 3580, -3580];

suite
.add('MyOriginalSolution', () => {
  arrayPartition(array);
})
.add('MyMoreEfficient(???)Solution', () => {
  moreEfficientSolution(array);
})
.on('cycle', (e) => {
  console.log(String(e.target));
})
.on('complete', function(e) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  const percentage = (Math.abs(this[0].hz - this[1].hz) / this[0].hz) * 100;
  console.log(`${percentage}% faster`);
})
.run({ async: true });
