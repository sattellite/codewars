/**
 *
 * URL http://www.codewars.com/kata/remove-first-and-last-character-part-two
 *
 * NAME Remove First and Last Character Part Two
 *
 * DESCRIPTION
 * This is a spin off of my first Kata(http://www.codewars.com/kata/56bc28ad5bdaeb48760009b0),
 * you are given a list of characters as a comma separated string. Write a
 * function to return a string containing all except the first and last
 * characters, separated by spaces. If the input string is empty, or the
 * removal of the first and last items would cause the string to be empty,
 * return null value.
 *
 * Arrays are joined by adding a single space between each consecutive array
 * element.
 *
 * TESTS
 *
 * Test.describe("Tests", function(){
 *   Test.assertEquals(array(''), null);
 *   Test.assertEquals(array('1'), null);
 *   Test.assertEquals(array('1, 3'), null);
 *   Test.assertEquals(array('1,2,3'), '2');
 * });
 */

const array = (arr) => {
  const a = arr.split(/,\s*/);
  if (a.length > 2) {
    return a.slice(1, -1).join(' ');
  }
  return null;
};

module.exports = array;
