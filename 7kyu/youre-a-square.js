/**
 * URL https://www.codewars.com/kata/youre-a-square
 *
 * NAME You're a square!
 *
 * DESCRIPTION
 * A square of squares
 *
 * You like building blocks. You especially like building blocks that are
 * squares. And what you even like more, is to arrange them into a square of
 * square building blocks!
 *
 * However, sometimes, you can't arrange them into a square. Instead, you end
 * up with an ordinary rectangle! Those blasted things! If you just had a way
 * to know, whether you're currently working in vain… Wait! That's it! You
 * just have to check if your number of building blocks is a perfect square.
 *
 * Task
 *
 * Given an integral number, determine if it's a square number:
 *
 * In mathematics, a square number or perfect square is an integer that is
 * the square of an integer; in other words, it is the product of some
 * integer with itself.
 * The tests will always use some integral number, so don't worry about that
 * in dynamic typed languages.
 *
 * Examples
 *
 * isSquare(-1) // => false
 * isSquare( 3) // => false
 * isSquare( 4) // => true
 * isSquare(25) // => true
 * isSquare(26) // => false
 *
 * TESTS
 *
 * Test.describe("isSquare", function(){
 *   Test.it("should work for some examples", function(){
 *     Test.expect(!isSquare(-1), "Negative numbers cannot be square numbers");
 *     Test.expect(!isSquare( 3));
 *     Test.expect( isSquare( 4));
 *     Test.expect( isSquare(25));
 *     Test.expect(!isSquare(26));
 *   });
 *   Test.it("should work for random square numbers", function(){
 *     var r, i;
 *     for(i = 0; i < 100; ++i){
 *       r = (Math.random() * 0xfff0) | 0;
 *       Test.expect(isSquare(r*r), (r * r) + " is a square number");
 *     }
 *   });
 * });
 */

const isSquare = n => Math.sqrt(n) % 1 === 0;

module.exports = isSquare;
