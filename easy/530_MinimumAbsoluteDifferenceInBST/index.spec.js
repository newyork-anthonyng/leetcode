const myModule = require('./');
const {
  TreeNode,
  getMinimumDifference,
} = myModule;

describe('getMinimumDifference', () => {
  it('should work with 1->3->2', () => {
    const root = new TreeNode(1);
    const first = new TreeNode(3);
    const second = new TreeNode(2);
    root.right = first;
    first.left = second;

    expect(getMinimumDifference(root)).toEqual(1);
  });

  it('should work with 5->2->4->8->6', () => {
    const root = new TreeNode(5);
    const first = new TreeNode(2);
    const second = new TreeNode(4);
    const third = new TreeNode(8);
    const fourth = new TreeNode(6);
    root.left = first;
    first.right = second;
    root.right = third;
    third.left = fourth;

    expect(getMinimumDifference(root)).toEqual(1);
  });

  it('should work with 236->104->701->227->911', () => {
    const root = new TreeNode(236);
    const first = new TreeNode(104);
    const second = new TreeNode(701);
    const third = new TreeNode(227);
    const fourth = new TreeNode(911);
    root.left = first;
    root.right = second;
    first.right = third;
    second.right = fourth;

    expect(getMinimumDifference(root)).toEqual(9);
  });

  it('should work with 0->2236->1277->2776->519', () => {
    const root = new TreeNode(0);
    const first = new TreeNode(2236);
    const second = new TreeNode(1277);
    const third = new TreeNode(2776);
    const fourth = new TreeNode(519);
    root.right = first;
    first.left = second;
    first.right = third;
    second.left = fourth;

    expect(getMinimumDifference(root)).toEqual(519);
  });
});
