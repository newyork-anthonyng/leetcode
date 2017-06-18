const myModule = require('./');
const {
  constructRectangle,
  alternateSolution,
} = myModule;

describe('constructRectangle', () => {
  it('should return correct answer for 4', () => {
    expect(constructRectangle(4)).toEqual([2, 2]);
  });

  it('should return correct answer for 10', () => {
    expect(constructRectangle(10)).toEqual([5, 2]);
  });

  it('should return correct answer for 3', () => {
    expect(constructRectangle(3)).toEqual([3, 1]);
  });

  it('should return correct answer for 2', () => {
    expect(constructRectangle(2)).toEqual([2, 1]);
  });
});

describe('alternateSolution', () => {
  it('should return correct answer for 4', () => {
    expect(alternateSolution(4)).toEqual([2, 2]);
  });

  it('should return correct answer for 10', () => {
    expect(alternateSolution(10)).toEqual([5, 2]);
  });

  it('should return correct answer for 3', () => {
    expect(alternateSolution(3)).toEqual([3, 1]);
  });

  it('should return correct answer for 2', () => {
    expect(alternateSolution(2)).toEqual([2, 1]);
  });
});
