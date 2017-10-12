const sortArray = require('../../6kyu/sort-the-odd');

describe('#6kyu SortTheOdd', () => {
  it('should sort arrays', () => {
    assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4, 11]), [1, 3, 2, 8, 5, 4, 11]);
    assert.deepEqual(sortArray([2, 22, 37, 11, 4, 1, 5, 0]), [2, 22, 1, 5, 4, 11, 37, 0]);
    assert.deepEqual(sortArray([1, 111, 11, 11, 2, 1, 5, 0]), [1, 1, 5, 11, 2, 11, 111, 0]);
    assert.deepEqual(sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    assert.deepEqual(sortArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual(sortArray([0, 1, 2, 3, 4, 9, 8, 7, 6, 5]), [0, 1, 2, 3, 4, 5, 8, 7, 6, 9]);
    assert.deepEqual(sortArray([33, 40, 39, 67, 19, 40]), [19, 40, 33, 39, 67, 40]);
    assert.deepEqual(sortArray([84, 24, 28, 28, 69, 25, 88, 77, 1, 49]), [84, 24, 28, 28, 1, 25, 88, 49, 69, 77]);
    assert.deepEqual(sortArray([99, 97, 85, 13, 67, 92, 56, 38, 11, 41, 46, 96, 10, 67, 40, 42, 35, 1]), [1, 11, 13, 35, 41, 92, 56, 38, 67, 67, 46, 96, 10, 85, 40, 42, 97, 99]);

  });
});


