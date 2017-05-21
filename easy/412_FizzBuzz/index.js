/*
 * https://leetcode.com/problems/fizz-buzz/#/description
 * Write a program that outputs the string representation of numbers from 1 to n.
 *
 * But for multiples of three it should output “Fizz” instead of the number
 * and for the multiples of five output “Buzz”. For numbers which are multiples
 * of both three and five output “FizzBuzz”.
 */

function fizzBuzz(number) {
  const result = [];

  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push(String(i));
    }
  }
  return result;
}

/*
 * This function doesn't use the native String() function to create a string
 */
function alternativeFizzBuzz(number) {
  const result = [];

  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push('' + i);
    }
  }
  return result;
}

/*
 * This answer from leetcode uses a while loop
 * https://discuss.leetcode.com/topic/64067/javascript-89-ms-solution
 */
function otherAnswer(n) {
  var result = [],
  str, i=1;
  while( i <= n ){
    str = '';
    if( i%3===0 ) str = 'Fizz';
    if( i%5===0 ) str += 'Buzz';
    if(!str) str += i;
    result.push( str );
    i++;
  }
  return result;
}

module.exports = {
  fizzBuzz,
  alternativeFizzBuzz,
  otherAnswer,
};

/*
 * Lessons learned
 * 
 * MyOriginalSolution x 2,150,470 ops/sec ±1.22% (76 runs sampled)
 * Alternative Solution: Not using String() x 2,434,559 ops/sec ±0.99% (85 runs sampled)
 * Alternative Solution: Using while loop x 2,723,618 ops/sec ±1.41% (83 runs sampled)
 * Fastest is Alternative Solution: Using while loop
 * 26% faster
 *
 * Not using the native String constructor was 13% faster.
 * String(2) is slower than `'' + 2`
 *
 * Using a while loop is 10% faster than using for loop.
 *
 * For this situation, I would sacrifice this premature optimization for the clarity of using a for loop.
 * I would use for loops when the number of iterations is known. In the case of fizz-buzz, we know that the
 * number of iterations will be the argument provided.
 */
