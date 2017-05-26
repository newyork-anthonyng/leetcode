const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  singleNumber,
  alternativeSolution,
  noExtraMemory,
  xorSolution,
} = myModule;

const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];

suite
.add('singleNumber', () => {
  singleNumber(array);
})
.add('Alternative Solution: Without Object.keys()', () => {
  alternativeSolution(array);
})
.add('Alternative Solution: No extra memory', () => {
  noExtraMemory(array);
})
.add('Alternative Solution: XOR solution', () => {
  xorSolution(array);
})
.on('cycle', (e) => {
  console.log(String(e.target));
})
.on('complete', function(e) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));

  const smallest = Math.min(this[0].hz, this[1].hz, this[2].hz, this[3].hz);
  const largest = Math.max(this[0].hz, this[1].hz, this[2].hz, this[3].hz);

  const percentage = (Math.abs(largest - smallest) / smallest) * 100;
  console.log(`${Math.floor(percentage)}% faster`);
})
.run({ async: true });
