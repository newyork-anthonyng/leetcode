const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  findRestaurant,
  alternateSolution,
} = myModule;

const list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'];
const list2 = ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun'];

suite
.add('MyAnswer', () => {
  findRestaurant(list1, list2);
})
.add('Alternative Solution', () => {
  alternateSolution(list1, list2);
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
