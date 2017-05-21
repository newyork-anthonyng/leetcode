const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  fizzBuzz,
  alternativeFizzBuzz,
  otherAnswer,
} = myModule;

const number = 20;

suite
.add('MyOriginalSolution', () => {
  fizzBuzz(number);
})
.add('Alternative Solution: Not using String()', () => {
  alternativeFizzBuzz(number);
})
.add('Alternative Solution: Using while loop', () => {
  otherAnswer(number);
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
