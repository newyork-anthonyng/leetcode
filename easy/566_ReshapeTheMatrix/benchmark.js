const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const reshapeMatrix = require('./').reshapeMatrix;
const spaceSavingSolution = require('./spaceSavingSolution').spaceSavingSolution;

const array = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];
const rows = 4;
const columns = 25;

suite
.add('MyOriginalSolution', () => {
  reshapeMatrix(array, rows, columns);
})
.add('SpaceEfficientSolution', () => {
  spaceSavingSolution(array, rows, columns);
})
.on('cycle', (e) => {
  console.log(String(e.target));
})
.on('complete', function(e) {
  console.log('Fastest is ' + this.filter('fastest').map('name'));

  const percentage = (Math.abs(this[0].hz - this[1].hz) / Math.max(this[0].hz, this[1].hz)) * 100;
  console.log(`${Math.floor(percentage)}% faster`);
})
.run({ async: true });
