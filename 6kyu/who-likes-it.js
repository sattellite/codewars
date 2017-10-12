/**
 * URL https://www.codewars.com/kata/who-likes-it
 *
 * NAME Who likes it?
 *
 * DESCRIPTION
 * You probably know the "like" system from Facebook and other pages. People can
 * "like" blog posts, pictures or other items. We want to create the text that
 * should be displayed next to such an item.
 *
 * Implement a function likes :: [String] -> String, which must take in input
 * array, containing the names of people who like an item. It must return the
 * display text as shown in the examples:
 *
 * likes [] // must be "no one likes this"
 * likes ["Peter"] // must be "Peter likes this"
 * likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
 * likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
 * likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
 * For more than 4 names, the number in and 2 others simply increases.

 * TESTS
 * describe('example tests', function() {
 *   it('should return correct text', function() {
 *     Test.assertEquals(likes([]), 'no one likes this');
 *     Test.assertEquals(likes(['Peter']), 'Peter likes this');
 *     Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
 *     Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
 *     Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
 *   });
 * });
 */

function likes(names) {
  if (names.length < 2) {
    const likesStr = ' likes this';
    if (names.length === 0) return `no one${likesStr}`;
    return names[0] + likesStr;
  }
  const like = ' like this';
  if (names.length === 2) return names.join(' and ') + like;
  if (names.length === 3) return `${names.slice(0, 2).join(', ')} and ${names[2]}${like}`;
  return `${names.slice(0, 2).join(', ')} and ${names.length - 2} others${like}`;
}

module.exports = likes;
