const myModule = require('./');
const {
  TreeNode,
  tree2str,
} = myModule;

describe('tree2str', () => {
  it('should omit missing right nodes', () => {
    const root = new TreeNode(1);
    const second = new TreeNode(2);
    const third = new TreeNode(3);
    const fourth = new TreeNode(4);
    root.left = second;
    root.right = third;
    second.left = fourth;

    expect(tree2str(root)).toEqual('1(2(4))(3)');
  });

  it('should treat missing left nodes correctly', () => {
    const root = new TreeNode(1);
    const second = new TreeNode(2);
    const third = new TreeNode(3);
    root.left = second;
    root.right = third;
    const fourth = new TreeNode(4);
    second.right = fourth;

    expect(tree2str(root)).toEqual('1(2()(4))(3)');
  });
});
