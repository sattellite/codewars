/**
 * URL http://www.codewars.com/kata/next-bigger-number-with-the-same-digits
 *
 * NAME Next bigger number with the same digits
 *
 * DESCRIPTION
 * You have to create a function that takes a positive integer number and
 * returns the next bigger number formed by the same digits:
 *
 * nextBigger(12)==21
 * nextBigger(513)==531
 * nextBigger(2017)==2071
 * If no bigger number can be composed using those digits, return -1:
 *
 * nextBigger(9)==-1
 * nextBigger(111)==-1
 * nextBigger(531)==-1
 *
 * TESTS
 *
 * Test.assertEquals(nextBigger(12),21)
 * Test.assertEquals(nextBigger(513),531)
 * Test.assertEquals(nextBigger(2017),2071)
 * Test.assertEquals(nextBigger(414),441)
 * Test.assertEquals(nextBigger(144),414)
 */

// Algorith from here https://stackoverflow.com/a/9368616/1489324
const nextBigger = (n) => {
  const arr = n.toString().split('');
  let left;
  let right;
  let delimeter;

  for (let i = arr.length; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) {
      right = arr.slice(i);
      left = arr.slice(0, i - 1);
      delimeter = arr[i - 1];
      break;
    }
  }

  if (!delimeter) {
    return -1;
  }

  let next = 10;
  let nextInd;
  for (let i = 0, len = right.length; i < len; i += 1) {
    if (+right[i] > +delimeter) {
      if (+next > +right[i]) {
        next = (+right[i]);
        nextInd = i;
      }
    }
  }

  if (typeof nextInd === 'undefined') {
    return -1;
  }

  right.splice(nextInd, 1);
  right.push(delimeter);

  const result = parseInt(left.concat(next, right.sort()).join(''), 10);
  if (result < n) return -1;
  return result;
};

module.exports = nextBigger;
