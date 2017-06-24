const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  maxCount,
  maxCountForEach,
} = myModule;

const m = 10;
const n = 10;
const ops = [
  [5, 5],
  [2, 3],
  [3, 5],
  [7, 7],
  [6, 4],
];

suite
.add('maxCount', () => {
  maxCount(m, n, ops);
})
.add('Alternative Solution: Max Count with For Each', () => {
  maxCountForEach(m, n, ops);
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
