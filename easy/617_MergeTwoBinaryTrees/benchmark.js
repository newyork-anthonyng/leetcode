const Benchmark = require('Benchmark');
const suite = new Benchmark.Suite;
const myModule = require('./');
const {
  TreeNode,
  mergeTrees,
  alternativeSolution,
} = myModule;

const treeRoot1 = new TreeNode(1);
const second1 = new TreeNode(3);
const third1 = new TreeNode(2);
const fourth1 = new TreeNode(5);
treeRoot1.left = second1;
treeRoot1.right = third1;
second1.left = fourth1;

const treeRoot2 = new TreeNode(2);
const second2 = new TreeNode(1);
const third2 = new TreeNode(3);
const fourth2 = new TreeNode(4);
const fifth2 = new TreeNode(7);
treeRoot2.left = second2;
treeRoot2.right = third2;
second2.right = fourth2;
third2.right = fifth2;

const result = new TreeNode(3);
const second3 = new TreeNode(4);
const third3 = new TreeNode(5);
const fourth3 = new TreeNode(5);
const fifth3 = new TreeNode(4);
const sixth3 = new TreeNode(7);
result.left = second3;
second3.left = fourth3;
second3.right = fifth3;
result.right = third3;
third3.right = sixth3;

suite
.add('MyAnswer', () => {
  mergeTrees(treeRoot1, treeRoot2);
})
.add('Alternative Solution', () => {
  alternativeSolution(treeRoot1, treeRoot2);
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
