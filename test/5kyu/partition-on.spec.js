const partitionOn = require('../../5kyu/partition-on');

describe('#5kyu PartitionOn', () => {
  it('should correct partitioning array', () => {
    const items = [1, 2, 3, 4, 5, 6];
    const val = partitionOn(n => n % 2 === 0, items);
    assert.equal(val, 3);
    assert.deepEqual(items.slice(0, val), [1, 3, 5]);
    assert.deepEqual(items.slice(val), [2, 4, 6]);
  });
});
