/**
 * URL https://www.codewars.com/kata/array-deep-count
 *
 * NAME Array Deep Count
 *
 * DESCRIPTION
 * Array.prototype.length will give you the number of top-level elements in
 * an array.
 *
 * Your task is to create a function deepCount that returns the number of ALL
 * elements within an array, including any within inner-level arrays.
 *
 * For example:
 *
 * deepCount([1, 2, 3]);
 * //>>>>> 3
 * deepCount(["x", "y", ["z"]]);
 * //>>>>> 4
 * deepCount([1, 2, [3, 4, [5]]]);
 * //>>>>> 7
 *
 * The input will always be an array.
 *
 * TESTS
 *
 * Test.assertEquals(deepCount([]), 0, "Expected 0")
 * Test.assertEquals(deepCount([1, 2, 3]), 3, "Expected 3")
 * Test.assertEquals(deepCount(["x", "y", ["z"]]), 4, "Expected 4")
 * Test.assertEquals(deepCount([1, 2, [3, 4, [5]]]), 7, "Expected 7")
 * Test.assertEquals(deepCount([[[[[[[[[]]]]]]]]]), 8, "Expected 8")
 */

function deepCount(a) {
  let count = a.length;
  for (let i = 0, len = a.length; i < len; i += 1) {
    if (a[i] instanceof Array) {
      count += deepCount(a[i]);
    }
  }
  return count;
}

module.exports = deepCount;
