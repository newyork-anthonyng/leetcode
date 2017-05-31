const myModule = require('./');
const {
  maxDepth,
  TreeNode,
  alternativeSolution,
} = myModule;

describe('maxDepth', () => {
  it('should return correct answer for Binary Tree with 1 node', () => {
    const root = new TreeNode(1);

    expect(maxDepth(root)).toEqual(1);
  });

  it('should return correct answer for Binary Tree with 2 nodes', () => {
    const root = new TreeNode(1);
    const leftNode = new TreeNode(2);
    root.left = leftNode;

    expect(maxDepth(root)).toEqual(2);
  });

  it('should return correct answer for Binary Tree with 3 levels', () => {
    const root = new TreeNode(1);
    const secondNode = new TreeNode(2);
    const thirdNode = new TreeNode(3);
    root.left = secondNode;
    secondNode.left = thirdNode;

    expect(maxDepth(root)).toEqual(3);
  });
});

describe('alternativeSolution', () => {
  it('should return correct answer for Binary Tree with 1 node', () => {
    const root = new TreeNode(1);

    expect(alternativeSolution(root)).toEqual(1);
  });

  it('should return correct answer for Binary Tree with 2 nodes', () => {
    const root = new TreeNode(1);
    const leftNode = new TreeNode(2);
    root.left = leftNode;

    expect(alternativeSolution(root)).toEqual(2);
  });

  it('should return correct answer for Binary Tree with 3 levels', () => {
    const root = new TreeNode(1);
    const secondNode = new TreeNode(2);
    const thirdNode = new TreeNode(3);
    root.left = secondNode;
    secondNode.left = thirdNode;

    expect(alternativeSolution(root)).toEqual(3);
  });
});
