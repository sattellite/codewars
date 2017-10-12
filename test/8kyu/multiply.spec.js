const multiply = require('../../8kyu/multiply');

describe('#8kyu Multiply', () => {
  it('should multiply passed numbers', () => {
    assert.equal(multiply(1, 1), 1);
    assert.equal(multiply(1, 2), 2);
    assert.equal(multiply(2, 2), 4);
    assert.equal(multiply(3, 5), 15);
  });
});
