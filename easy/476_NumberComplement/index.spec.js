const myModule = require('./');
const {
  numberComplement,
  bitAnswer,
  alternativeBitAnswer,
} = myModule;

describe('numberComplement', () => {
  it('should handle 5', () => {
    expect(numberComplement(5)).toEqual(2);
  });

  it('should handle 1', () => {
    expect(numberComplement(1)).toEqual(0);
  });
});

describe('bitAnswer', () => {
  it('should handle 5', () => {
    expect(bitAnswer(5)).toEqual(2);
  });

  it('should handle 1', () => {
    expect(bitAnswer(1)).toEqual(0);
  });
});

describe('alternativeBitAnswer', () => {
  it('should handle 5', () => {
    expect(alternativeBitAnswer(5)).toEqual(2);
  });

  it('should handle 1', () => {
    expect(alternativeBitAnswer(1)).toEqual(0);
  });
});
