const myModule = require("./");
const {
  findMedianSortedArrays
} = myModule;

describe("Original", () => {
  it("should work with 2 arrays with an odd amount of numbers", () => {
    const a = [1, 3];
    const b = [2];

    expect(findMedianSortedArrays(a, b)).toEqual(2);
  });

  it("should work with 2 arrays with an even amount of numbers", () => {
    const a = [1, 2];
    const b = [3, 4];

    expect(findMedianSortedArrays(a, b)).toEqual(2.5);
  });

  it("should work when 1 array is empty", () => {
    const a = [2];
    const b = [];

    expect(findMedianSortedArrays(a, b)).toEqual(2);
  });

  it("should work when both arrays are the same", () => {
    const a = [1];
    const b = [1];

    expect(findMedianSortedArrays(a, b)).toEqual(1);
  });
});
