/**
 *
 * URL http://www.codewars.com/kata/implement-a-filter-function
 *
 * NAME Implement a Filter function
 *
 * DESCRIPTION
 * What we want to implement is a filter function, like Array.filter(), also
 * similar to the _.filter() in underscore.js and lodash.js.
 *
 * The usage is quite simple, like:
 * [1,2,3,4].filter((num)=>{ return num > 3})
 *
 * should output [4]
 *
 * TESTS
 *
 * Test.assertSimilar([1,2,3,4].filter((num)=>{ return num > 3}), [4])
 */

// eslint-disable-next-line no-extend-native, func-names
Array.prototype.filter = function(fn) {
  if (!fn || typeof fn !== 'function') {
    throw new TypeError;
  }
  const result = [];

  for (let i = 0, len = this.length; i < len; i += 1) {
    if (fn(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};


 module.exports = Array;
