const myModule = require('./');
const {
  fizzBuzz,
  alternativeFizzBuzz,
  otherAnswer,
} = myModule;

describe('fizzBuzz', () => {
  it('should handle number 15', () => {
    const number = 15;
    const result = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ];

    expect(fizzBuzz(number)).toEqual(result);
  });
});

describe('alternativeFizzBuzz', () => {
  it('should handle number 15', () => {
    const number = 15;
    const result = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ];

    expect(alternativeFizzBuzz(number)).toEqual(result);
  });
});

describe('otherAnswer', () => {
  it('should handle number 15', () => {
    const number = 15;
    const result = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz'
    ];

    expect(otherAnswer(number)).toEqual(result);
  });
});
