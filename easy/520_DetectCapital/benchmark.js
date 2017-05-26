const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  detectCapitalUse,
  alternativeSolution,
  regexAnswer,
} = myModule;

const validWord = 'Google';
const invalidWord = 'GOOGLe';

suite
.add('MyOriginalSolution', () => {
  detectCapitalUse(validWord);
  detectCapitalUse(invalidWord);
})
.add('Alternative Solution: Use regex to test for uppercase', () => {
  alternativeSolution(validWord);
  alternativeSolution(invalidWord);
})
.add('Alternative Solution: Using only Regex', () => {
  regexAnswer(validWord);
  regexAnswer(invalidWord);
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
