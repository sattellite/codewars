/**
 * URL https://www.codewars.com/kata/calculating-with-functions
 *
 * NAME Calculating with Functions
 *
 * DESCRIPTION
 * This time we want to write calculations using functions and get the results.
 * Let's have a look at some examples:

 * seven(times(five())); // must return 35
 * four(plus(nine())); // must return 13
 * eight(minus(three())); // must return 5
 * six(dividedBy(two())); // must return 3
 *
 * Requirements:
 *
 * - There must be a function for each number from 0 ("zero") to 9 ("nine")
 * - There must be a function for each of the following mathematical operations:
 *   plus, minus, times, dividedBy (divided_by in Ruby)
 * - Each calculation consist of exactly one operation and two numbers
 * - The most outer function represents the left operand, the most inner function
 *   represents the right operand
 *
 * TESTS
 * Test.assertEquals(seven(times(five())), 35);
 * Test.assertEquals(four(plus(nine())), 13);
 * Test.assertEquals(eight(minus(three())), 5);
 * Test.assertEquals(six(dividedBy(two())), 3);
 */

const curry = (num, operator) => (operator ? operator(num) : num);

const zero = operator => curry(0, operator);
const one = operator => curry(1, operator);
const two = operator => curry(2, operator);
const three = operator => curry(3, operator);
const four = operator => curry(4, operator);
const five = operator => curry(5, operator);
const six = operator => curry(6, operator);
const seven = operator => curry(7, operator);
const eight = operator => curry(8, operator);
const nine = operator => curry(9, operator);

const plus = a => b => b + a;
const minus = a => b => b - a;
const times = a => b => b * a;
const dividedBy = a => b => b / a;

module.exports = {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
};
