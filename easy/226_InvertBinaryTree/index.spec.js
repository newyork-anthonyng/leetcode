const myModule = require('./');
const {
  TreeNode,
  invertTree,
  cleanerSolution,
  iterativeSolution,
} = myModule;

const generateInitialTree = () => {
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

  return root;
};

const generateInvertedTree = () => {
  const root = new TreeNode(4);
  const first = new TreeNode(7);
  const second = new TreeNode(2);
  root.left = first;
  root.right = second;

  const third = new TreeNode(9);
  const fourth = new TreeNode(6);
  first.left = third;
  first.right = fourth;

  const fifth = new TreeNode(3);
  const sixth = new TreeNode(1);
  second.left = fifth;
  second.right = sixth;

  return root;
};

describe('invertTree', () => {
  it('should invert tree', () => {
    const initialRoot = generateInitialTree();
    const result = generateInvertedTree();

    expect(invertTree(initialRoot)).toEqual(result);
  });

  it('should handle undefined', () => {
    expect(invertTree()).toEqual();
  });
});

describe('cleanerSolution', () => {
  it('should invert tree', () => {
    const initialRoot = generateInitialTree();
    const result = generateInvertedTree();

    expect(cleanerSolution(initialRoot)).toEqual(result);
  });

  it('should handle undefined', () => {
    expect(cleanerSolution()).toEqual();
  });
});

describe('iterativeSolution', () => {
  it('should invert tree', () => {
    const initialRoot = generateInitialTree();
    const result = generateInvertedTree();

    expect(iterativeSolution(initialRoot)).toEqual(result);
  });

  it('should handle undefined', () => {
    expect(iterativeSolution()).toEqual();
  });
});
