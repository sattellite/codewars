const opposite = require('../../8kyu/opposite-number');

describe('#8kyu OppositeNumber', () => {
  it('should return -1', () => {
    const val = opposite(1);
    expect(val).to.equal(-1);
  });
});
