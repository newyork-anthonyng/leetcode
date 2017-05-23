const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  nextGreaterElement,
  whileLoop,
} = myModule;

const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];

suite
  .add('MySolution', () => {
    nextGreaterElement(nums1, nums2);
  })
  .add('WhileLoop', () => {
    whileLoop(nums1, nums2);
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
