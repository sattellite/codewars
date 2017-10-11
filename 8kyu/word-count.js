/**
 * URL https://www.codewars.com/kata/word-count
 *
 * NAME Word Count
 *
 * DESCRIPTION
 * Can you realize a function that returns word count from a given string?
 *
 * You have to ensure that spaces in string is a whitespace for real.
 *
 * What we want and finish of work:
 *
 * countWords("Hello"); // returns 1 as int
 * countWords("Hello, World!") // returns 2
 * countWords("No results for search term `s`") // returns 6
 * countWords(" Hello") // returns 1
 * // ... and so on
 * What kind of tests we got for your code:
 *
 * 1. Function have to count words, but not spaces, so be sure that it does right.
 * 3. Empty string has no words.
 * 4. String with spaces around should be trimmed.
 * 5. Non-whitespace (ex. breakspace, unicode chars) should be assumed as
 *    delimiter
 * 6. Be sure that words with chars like -, ', ` are counted right.
 *
 * TESTS
 * describe("countWords", function() {
 *  it("should work in basic form of problem", function() {
 *    Test.assertEquals(countWords("Hello"), 1);
 *    Test.assertEquals(countWords("Hello, World!"), 2);
 *    Test.assertEquals(countWords("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."), 19);
 *    Test.assertEquals(countWords(""), 0);
 *    Test.assertEquals(countWords("With! Symbol@ #Around! (Every) %Word$"), 5);
 *    Test.assertEquals(countWords("Dear   Victoria, I love  to press   space button."), 8);
 *  });
 *
 *  it("should work with spaces around string", function() {
 *    Test.assertEquals(countWords(" Arthur "), 1);
 *    Test.assertEquals(countWords(" David"), 1);
 *    Test.assertEquals(countWords("Nelson "), 1);
 *    Test.assertEquals(countWords("  Hello Gomer  "), 2);
 *    Test.assertEquals(countWords("  Hello     Bart  "), 2);
 *  });
 *
 *  it("should work with non-whitespace (ex. breakspace) chars", function() {
 *    Test.assertEquals(countWords("﻿Hello﻿World "), 2);
 *    Test.assertEquals(countWords("Hello﻿World"), 2);
 *  });
 *});
 */

function countWords(str) {
  return (str.split(/\s+/).filter(Boolean)).length;
}

module.exports = countWords;
