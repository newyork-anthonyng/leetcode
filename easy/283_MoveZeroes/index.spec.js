const myModule = require('./');
const {
  moveZeroes,
  alternateAnswer,
  optimalAnswer,
} = myModule;

describe('moveZeroes', () => {
  it('should handle [0, 1, 0, 3, 12]', () => {
    const array = [0, 1, 0, 3, 12];
    const result = [1, 3, 12, 0, 0];
    moveZeroes(array);

    expect(array).toEqual(result);
  });

  it('should handle [0]', () => {
    const array = [0];
    const result = [0];
    moveZeroes(array);

    expect(array).toEqual(result);
  });

  it('should handle [1]', () => {
    const array = [1];
    const result = [1];
    moveZeroes(array);

    expect(array).toEqual(result);
  });

  it('should handle []', () => {
    const array = [];
    const result = [];
    moveZeroes(array);

    expect(array).toEqual(result);
  });
});

describe('alternateAnswer', () => {
  it('should handle [0, 1, 0, 3, 12]', () => {
    const array = [0, 1, 0, 3, 12];
    const result = [1, 3, 12, 0, 0];
    alternateAnswer(array);

    expect(array).toEqual(result);
  });

  it('should handle [0]', () => {
    const array = [0];
    const result = [0];
    alternateAnswer(array);

    expect(array).toEqual(result);
  });

  it('should handle [1]', () => {
    const array = [1];
    const result = [1];
    alternateAnswer(array);

    expect(array).toEqual(result);
  });

  it('should handle []', () => {
    const array = [];
    const result = [];
    alternateAnswer(array);

    expect(array).toEqual(result);
  });
});

describe('optimalAnswer', () => {
  it('should handle [0, 1, 0, 3, 12]', () => {
    const array = [0, 1, 0, 3, 12];
    const result = [1, 3, 12, 0, 0];
    optimalAnswer(array);

    expect(array).toEqual(result);
  });

  it('should handle [0]', () => {
    const array = [0];
    const result = [0];
    optimalAnswer(array);

    expect(array).toEqual(result);
  });

  it('should handle [1]', () => {
    const array = [1];
    const result = [1];
    optimalAnswer(array);

    expect(array).toEqual(result);
  });

  it('should handle []', () => {
    const array = [];
    const result = [];
    optimalAnswer(array);

    expect(array).toEqual(result);
  });
});
