const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  numberComplement,
  bitAnswer,
  alternativeBitAnswer,
 } = myModule;

suite
.add('MyOriginalSolution', () => {
  numberComplement(101);
})
.add('BitSolution', () => {
  bitAnswer(101);
})
.add('MyAlternativeBitSolution', () => {
  alternativeBitAnswer(101);
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
