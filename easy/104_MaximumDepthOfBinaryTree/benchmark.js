
const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  maxDepth,
  alternativeSolution,
  TreeNode,
} = myModule;

const root = new TreeNode(1);
const secondNode = new TreeNode(2);
const thirdNode = new TreeNode(3);
const fourthNode = new TreeNode(4);
const fifthNode = new TreeNode(5);

root.left = secondNode;
root.right = thirdNode;
thirdNode.left = fourthNode;
fourthNode.left = fifthNode;

suite
.add('MySolution', () => {
  maxDepth(root);
})
.add('Alternative Solution: Iterative Solution', () => {
  alternativeSolution(root);
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
