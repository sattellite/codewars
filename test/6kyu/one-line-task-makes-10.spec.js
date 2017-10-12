const makes10 = require('../../6kyu/one-line-task-makes-10');

describe('#6kyu Makes10', () => {
  it('code length should less than 36 characters', () => {
    const val = `makes10=${makes10.toString()}`;
    assert.equal(val.length < 36, true);
  });

  it('should complete the task', () => {
    assert.equal(makes10(1, 10), true);
    assert.equal(makes10(1, 2), false);
    assert.equal(makes10(10, 1), true);
    assert.equal(makes10(1, 11), false);
    assert.equal(makes10(1, 9), true);
    assert.equal(makes10(11, 12), false);
    assert.equal(makes10(10, 10), true);
    assert.equal(makes10(20, 20), false);
  });
});
