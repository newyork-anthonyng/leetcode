//
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  findTheDifference,
  alternativeSolution,
  bitwiseSolution,
} = myModule;

const s = 'abcdefghijklmnopqrstuvwxyz';
const t = 'abcdefghizjklmnopqrstuvwxyz';

suite
.add('MyOriginalSolution', () => {
  findTheDifference(s, t);
})
.add('Alternative Solution: Using Object.keys()', () => {
  alternativeSolution(s, t);
})
.add('Alternative Solution: Bitwise solution', () => {
  bitwiseSolution(s, t);
})
.on('cycle', (e) => {
  console.log(String(e.target));
})
.on('complete', function(e) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));

  const smallest = Math.min(this[0].hz, this[1].hz, this[2].hz);
  const largest = Math.max(this[0].hz, this[1].hz, this[2].hz);

  const percentage = (Math.abs(largest - smallest) / smallest) * 100;
  console.log(`${Math.floor(percentage)}% faster`);
})
.run({ async: true });
