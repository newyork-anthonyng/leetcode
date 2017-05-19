const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  reverseWords,
  fasterReverseWords,
  otherSolution,
} = myModule;

const string = `Let's take LeetCode contest`;

suite
.add('MyOriginalSolution', () => {
  reverseWords(string);
})
.add('Alternative Solution: MyFasterSolution', () => {
  fasterReverseWords(string);
})
.add('Alternative Solution: Not using Array.reverse()', () => {
  otherSolution(string);
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
