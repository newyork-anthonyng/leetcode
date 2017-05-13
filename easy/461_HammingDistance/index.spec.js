const myModule = require('./');
const {
  decimalToBinary,
  hammingDistance,
  leftPadBinary,
} = myModule;

describe('decimalToBinary', () => {
  it('should return correct answer for positive numbers', () => {
    const result = '1011';

    expect(decimalToBinary(11)).toEqual(result);
  });

  it('should return correct answer for negative numbers', () => {
    const result = '11111111111111111111111111111101';

    expect(decimalToBinary(-3)).toEqual(result);
  });

  it('should handle string arguments', () => {
    expect(decimalToBinary('foo')).not.toBeDefined();
  });

  it('should handle undefined arguments', () => {
    expect(decimalToBinary()).not.toBeDefined();
  });
});

describe('leftPadBinary', () => {
  it('should left pad with "0"', () => {
    const argument = '100';
    const result = '00100';

    expect(leftPadBinary('100', 5)).toEqual(result);
  });

  it('should handle when desired length is less than length of given value', () => {
    const argument = '10011';

    expect(leftPadBinary(argument, 2)).toEqual(argument);
  });

  it('should handle undefined value argument', () => {
    expect(leftPadBinary()).not.toBeDefined();
  });

  it('should handle undefined desired length argument', () => {
    const argument = '10011';

    expect(leftPadBinary(argument)).toEqual(argument);
  });
});

describe('hammingDistance', () => {
  it('should return correct answer for duplicate inputs', () => {
    const result = 0;

    expect(hammingDistance(4, 4)).toEqual(result);
  });

  it('should return correct answer for 1 and 4', () => {
    const result = 2;

    expect(hammingDistance(1, 4)).toEqual(result);
  });

  it('should return correct answer for 3 and 4', () => {
    const result = 3;

    expect(hammingDistance(3, 4)).toEqual(result);
  });
});
