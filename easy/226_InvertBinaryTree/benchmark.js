const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  TreeNode,
  invertTree,
  cleanerSolution,
  iterativeSolution,
} = myModule;

const root = new TreeNode(4);
const first = new TreeNode(2);
const second = new TreeNode(7);
root.left = first;
root.right = second;

const third = new TreeNode(1);
const fourth = new TreeNode(3);
first.left = third;
first.right = fourth;

const fifth = new TreeNode(6);
const sixth = new TreeNode(9);
second.left = fifth;
second.right = sixth;

suite
.add('MySolution', () => {
  invertTree(root);
})
.add('Alternative Solution: Cleaner recursive solution', () => {
  cleanerSolution(root);
})
.add('Alternative Solution: Iterative Solution', () => {
  iterativeSolution(root);
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
