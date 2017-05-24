const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const mySolution = require('./').islandPerimeter;
const alternativeSolution = require('./alternativeSolution').alternativeSolution;

const grid = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0],
];

suite
  .add('MySolution', () => {
    mySolution(grid);
  })
  .add('Alternative Solution', () => {
    alternativeSolution(grid);
  })
  .on('cycle', (e) => {
    console.log(String(e.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));

    const smallest = Math.min(this[0].hz, this[1].hz);
    const largest = Math.max(this[0].hz, this[1].hz);

    const percentage = (Math.abs(largest - smallest) / largest) * 100;
    console.log(`${Math.floor(percentage)}% faster`);
  })
  .run({ async: true });
