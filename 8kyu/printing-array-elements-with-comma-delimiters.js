/**
 * URL https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
 *
 * NAME Printing Array elements with Comma delimiters
 *
 * DESCRIPTION
 * Input: Array of elements
 *
 * ["h","o","l","a"]
 *
 * Output: String with comma delimited elements of the array in th same order.
 *
 * "h,o,l,a"
 *
 * TESTS
 *
 * var data = [2,4,5,2];
 * Test.expect( printArray( data ) ==
 *   "2,4,5,2", "int test failed" )
 */

function printArray(array) {
  return array.join();
}

module.exports = printArray;
