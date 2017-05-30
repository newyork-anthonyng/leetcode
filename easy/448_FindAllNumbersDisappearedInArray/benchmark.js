const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  findDisappearedNumbers,
  alternateSolution,
} = myModule;


const array = [4, 3, 2, 7, 8, 2, 3, 1];

suite
.add('MyOriginalSolution', () => {
  findDisappearedNumbers(array);
})
.add('Alternative Solution: O(n) without extra space', () => {
  alternateSolution(array);
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
