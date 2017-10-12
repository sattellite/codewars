/**
 * URL https://www.codewars.com/kata/sort-the-odd
 *
 * NAME Sort the odd
 *
 * DESCRIPTION
 * You have an array of numbers.
 * Your task is to sort ascending odd numbers but even numbers must be on their
 * places.
 *
 * Zero isn't an odd number and you don't need to move it. If you have an empty
 * array, you need to return it.
 *
 * Example
 *
 * sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
 *
 * TESTS
 *
 * Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
 * Test.assertSimilar(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
 * Test.assertSimilar(sortArray([]),[])
 */

function sortArray(array) {
  // Get positions of odd element
  const pos = array.map((n, i) => ((n % 2) ? i : ''))
    .filter(el => typeof el === 'number').sort((a, b) => a - b);
  // Get odd elements by its positions and sort array
  const odd = pos.map(p => array[p]).sort((a, b) => a - b);

  return array.map((el, i) => {
    const sortedIndex = pos.indexOf(i);
    if (sortedIndex < 0) {
      return el;
    }
    return odd[sortedIndex];
  });
}

module.exports = sortArray;
