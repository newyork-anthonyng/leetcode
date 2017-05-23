const myModule = require('./');
const {
  nextGreaterElement,
  whileLoop,
} = myModule;

describe('nextGreaterElement', () => {
  it('sample 1', () => {
    const nums1 = [4, 1, 2];
    const nums2 = [1, 3, 4, 2];
    const expected = [-1, 3, -1];

    expect(nextGreaterElement(nums1, nums2)).toEqual(expected);
  });

  it('sample 2', () => {
    const nums1 = [2, 4];
    const nums2 = [1, 2, 3, 4];
    const expected = [3, -1];

    expect(nextGreaterElement(nums1, nums2)).toEqual(expected);
  });
});

describe('whileLoop', () => {
  it('sample 1', () => {
    const nums1 = [4, 1, 2];
    const nums2 = [1, 3, 4, 2];
    const expected = [-1, 3, -1];

    expect(whileLoop(nums1, nums2)).toEqual(expected);
  });

  it('sample 2', () => {
    const nums1 = [2, 4];
    const nums2 = [1, 2, 3, 4];
    const expected = [3, -1];

    expect(whileLoop(nums1, nums2)).toEqual(expected);
  });
});
