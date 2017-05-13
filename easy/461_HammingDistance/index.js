/*
 * https://leetcode.com/problems/hamming-distance/#/description
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
 *
 * Given two integers x and y, calculate the Hamming distance.
 */

function hammingDistance(x, y) {
  /*
   * Turn x, y arguments into binary numbers with the same length.
   */
  let binaryX = decimalToBinary(x);
  let binaryY = decimalToBinary(y);
  const maxLen = Math.max(binaryX.length, binaryY.length);
  binaryX = leftPadBinary(binaryX, maxLen);
  binaryY = leftPadBinary(binaryY, maxLen);

  let differences = 0;
  for (let i = 0; i < Math.max(binaryX.length, binaryY.length); i++) {
    if (binaryY[i] !== binaryX[i]) {
      differences++;
    }
  }

  return differences;
}

function decimalToBinary(decimal) {
  if (typeof decimal !== 'number') return;

  /*
   * The shift operator >>> turns our decimal number into an unsigned 32-bit integer.
   * This is helpful when working with negative numbers. Without >>>, the binary conversion
   * of a negative number is the same as the binary conversion of the positive number, with
   * the sign included in the front.
   * i.e. decimalToBinary(-3) === -11
   *
   * .toString() receives a radix argument. An argument of 2 gives us a binary representation
   * of our number.
   */
  return (decimal >>> 0).toString(2);
}

function leftPadBinary(value, desiredLength) {
  if (typeof value !== 'string') return;

  let paddedValue = value;

  while (paddedValue.length < desiredLength) {
    paddedValue = `0${paddedValue}`;
  }

  return paddedValue;
}

module.exports = {
  hammingDistance,
  decimalToBinary,
  leftPadBinary,
};

/*
 * Practical applications of hamming distance?
 * It represents the minimum number of changes (substitutions) necessary
 * to change one string to another.
 */
