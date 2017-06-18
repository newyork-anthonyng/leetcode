const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  constructRectangle,
  alternateSolution,
 } = myModule;

suite
.add('MyOriginalSolution', () => {
  constructRectangle(109);
})
.add('Alternate Solution', () => {
  alternateSolution(109);
})
.on('cycle', (e) => {
  console.log(String(e.target));
})
.on('complete', function(e) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));

  const smallest = Math.min(this[0].hz, this[1].hz);
  const largest = Math.max(this[0].hz, this[1].hz);

  const percentage = (Math.abs(largest - smallest) / largest) * 100;
  console.log(`${Math.floor(percentage)}% faster`);
})
.run({ async: true });
