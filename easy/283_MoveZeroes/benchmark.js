const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  moveZeroes,
  alternateAnswer,
  optimalAnswer,
} = myModule;

const array = [1, 0, 13, 0, 12, 0, 14, 0, 0];

suite
.add('MyOriginalSolution', () => {
  moveZeroes(array);
})
.add('Alternative Solution: Other JavaScript answer', () => {
  alternateAnswer(array);
})
.add('Alternative Solution: Optimal Answer', () => {
  optimalAnswer(array);
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
