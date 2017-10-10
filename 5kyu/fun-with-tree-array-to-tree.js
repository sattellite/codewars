/**
 *
 * URL https://www.codewars.com/kata/fun-with-trees-array-to-tree/train/javascript
 *
 * NAME Fun with trees: array to tree
 *
 * DESCRIPTION
 * You are given a non-null array of integers. Implement the method arrayToTree
 * which creates a binary tree from its values in accordance to their order,
 * while creating nodes by depth from left to right.
 *
 * For example, given the array [17, 0, -4, 3, 15] you should create the
 * following tree:
 *
 *     17
 *    /  \
 *   0   -4
 *  / \
 * 3   15
 *
 * The class TreeNode is available for you:
 *
    var TreeNode = function(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    };
 *
 * This kata is part of fun with trees(https://www.codewars.com/collections/fun-with-trees) series:
 *
 * - Fun with trees: max sum (https://www.codewars.com/kata/57e5279b7cf1aea5cf000359)
 * - Fun with trees: array to tree (https://www.codewars.com/kata/57e5a6a67fbcc9ba900021cd)
 * - Fun with trees: is perfect (https://www.codewars.com/kata/57dd79bff6df9b103b00010f)
 */

const TreeNode = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

const leftIndex = i => (2 * i) + 1;
const rightIndex = i => (2 * i) + 2;
const isExist = (arr, i) => typeof arr[i] !== 'undefined';

const arrayToTree = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  const list = [];

  array.forEach(el => list.push(new TreeNode(el)));

  for (let i = 0, c = Math.floor(list.length / 2); i < c; i += 1) {
    if (isExist(list, leftIndex(i))) {
      list[i].left = list[leftIndex(i)];
    }
    if (isExist(list, rightIndex(i))) {
      list[i].right = list[rightIndex(i)];
    }
  }

  return list[0];
};

module.exports = { arrayToTree, TreeNode };
