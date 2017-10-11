/**
 * URL https://www.codewars.com/kata/basic-mathematical-operations
 *
 * NAME Basic Mathematical Operations
 *
 * DESCRIPTION
 * Your task is to create a function - basic_op().
 *
 * The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.
 *
 * Examples:
 *
 * basicOp('+', 4, 7)         // Output: 11
 * basicOp('-', 15, 18)       // Output: -3
 * basicOp('*', 5, 5)         // Output: 25
 * basicOp('/', 49, 7)        // Output: 7
 *
 * TESTS
 *
 * Test.assertSimilar(basicOp('+', 4, 7), 11);
 * Test.assertSimilar(basicOp('-', 15, 18), -3);
 * Test.assertSimilar(basicOp('*', 5, 5), 25);
 * Test.assertSimilar(basicOp('/', 49, 7), 7);
 */

function basicOp(operation, value1, value2) {
  return eval(`${value1}${operation}${value2}`);
}

module.exports = basicOp;
