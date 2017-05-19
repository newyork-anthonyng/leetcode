/*
 * Given a positive integer, output its complement number.
 * The complement strategy is to flip the bits of its binary representation.
 * https://leetcode.com/problems/number-complement/#/description
 */

function numberComplement(number) {
  const binary = number.toString(2);
  const notBinary = binary
    .split('')
    .map((digit) => {
      return digit === '1' ? '0' : '1';
    })
    .join('');

  return parseInt(notBinary, 2);
}

function bitAnswer(number) {
  /*
   * mask will be a binary of '1's with same length as argument
   * i.e. number = 5, or 0b101
   *      mask = 7, or 0b111
   */
  let mask = 1;
  while (mask < number) {
    mask = (mask << 1) | 1;
  }
  return number ^ mask;
}

/*
 * This solution is a different take on the bit answer.
 * I am creating the mask by using the String.repeat() method
 */
function alternativeBitAnswer(number) {
  const binary = number.toString(2);
  const mask = '1'.repeat(binary.length);

  return parseInt(binary, 2) ^ parseInt(mask, 2);
}

module.exports = {
  numberComplement,
  bitAnswer,
  alternativeBitAnswer,
};

/*
 * Lessons Learned
 *
 * MyOriginalSolution x 204,282 ops/sec ±1.23% (81 runs sampled)
 * BitSolution x 56,761,987 ops/sec ±1.48% (78 runs sampled)
 * MyAlternativeBitSolution x 1,726,209 ops/sec ±1.21% (83 runs sampled)
 * Fastest is BitSolution
 * 99% faster
 *
 * The BitSolution was 56million ops/sec!
 * My alternative solution was 1.7million ops/sec!
 * My original was only 200k ops/sec!
 *
 * It seems like bitwise operations are always going to be faster than creating
 * JavaScript built-in Objects like String or Number.
 *
 * Some bitwise tricks.
 *
 * To denote binary numbers from decimal numbers, you can prefix it with "0b" in JavaScript. This is
 * something new in ES6.
 *
 * To get a complement of a binary:
 * 1. Create a mask. This is a binary with the same length as your number, but filled with 1's
 * For example, if your number is 19, the binary is 0b10011. The length of that binary is 5. So your "mask" is 0b11111.
 * 2. Get the XOR (^) between your number and your mask.
 * 3. The result is the complement of your number.
 *
 */
