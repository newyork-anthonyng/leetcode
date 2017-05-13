function hammingDistance(x, y) {
  /*
   * The bitwise XOR (^) operator gives you a 0 when 2 bits are the same,
   * and a 1 when 2 bits are different.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR
   */

  // get a binary number where all 1's represent bits that are different (thanks to the XOR operator)
  return (x ^ y)
  // turn it into a string representation of the binary number
  .toString(2)
  // pull out all 0's
  .replace(/0/g, '')
  // get the length of the remaining string
  .length;
}

module.exports = hammingDistance;
