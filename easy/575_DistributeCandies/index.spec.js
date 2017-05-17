const myModule = require('./');
const {
  distributeCandies,
  alternativeSolution,
  usingSet
} = myModule;

describe('distributeCandies', () => {
  it('should handle [1,1,2,2,3,3]', () => {
    const array = [1, 1, 2, 2, 3, 3];

    expect(distributeCandies(array)).toEqual(3);
  });

  it('should handle [1,1,2,3]', () => {
    const array = [1, 1, 2, 3];

    expect(distributeCandies(array)).toEqual(2);
  });
});

describe('alternativeSolution', () => {
  it('should handle [1,1,2,2,3,3]', () => {
    const array = [1, 1, 2, 2, 3, 3];

    expect(alternativeSolution(array)).toEqual(3);
  });

  it('should handle [1,1,2,3]', () => {
    const array = [1, 1, 2, 3];

    expect(alternativeSolution(array)).toEqual(2);
  });
});

describe('usingSet', () => {
  it('should handle [1,1,2,2,3,3]', () => {
    const array = [1, 1, 2, 2, 3, 3];

    expect(usingSet(array)).toEqual(3);
  });

  it('should handle [1,1,2,3]', () => {
    const array = [1, 1, 2, 3];

    expect(usingSet(array)).toEqual(2);
  });
});
