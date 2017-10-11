/**
 * URL https://www.codewars.com/kata/partition-on
 *
 * NAME Partition On
 *
 * DESCRIPTION
 * Write a function which partitions a list of items based on a given
 * redicate.
 *
 * After the partition function is run, the list should be of the form [ F, F,
 *  F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate
 * unction returned false (resp. true).
 *
 * NOTE: the partitioning should be stable; in other words: the ordering of
 * the Fs (resp. Ts) should be preserved relative to each other.
 *
 * For convenience and utility, the partition function should return the
 * boundary index. In other words: the index of the first T value in items.
 *
 * For example:
 *
 * var items = [1, 2, 3, 4, 5, 6];
 * function isEven(n) {return n % 2 == 0}
 * var i = partitionOn(isEven, items);
 * // items should now be [1, 3, 5, 2, 4, 6]
 * // i     should now be 3
 *
 * TESTS
 *
 * var items = [1, 2, 3, 4, 5, 6];
 * function isEven(n) {return n % 2 == 0}
 * var i = partitionOn(isEven, items);
 * Test.assertEquals( i, 3, 'partioned at 3' );
 * Test.assertSimilar( items.slice(0, i), [1, 3, 5] );
 * Test.assertSimilar( items.slice(i),    [2, 4, 6] );
 */

function partitionOn(pred, items) {
  let i = 0;
  items.splice(0).forEach((el) => {
    if (pred(el)) {
      items.push(el);
    } else {
      items.splice(i, 0, el);
      i += 1;
    }
  });

  return i;
}

module.exports = partitionOn;
