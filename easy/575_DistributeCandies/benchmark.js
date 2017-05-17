const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  distributeCandies,
  alternativeSolution,
  usingSet
} = myModule;

const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

suite
.add('MyOriginalSolution', () => {
  distributeCandies(array);
})
.add('AlternativeSolution: Without Object.keys()', () => {
  alternativeSolution(array);
})
.add('AlternativeSolution: Using JavaScript Set', () => {
  usingSet(array);
})
.on('cycle', (e) => {
  console.log(String(e.target));
})
.on('complete', function(e) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));

  const smallest = Math.min(this[0].hz, this[1].hz, this[2].hz);
  const largest = Math.max(this[0].hz, this[1].hz, this[2].hz);

  const percentage = (Math.abs(largest - smallest) / largest) * 100;
  console.log(`${Math.floor(percentage)}% faster`);
})
.run({ async: true });
