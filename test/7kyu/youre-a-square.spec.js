/* eslint-disable no-bitwise */
const isSquare = require('../../7kyu/youre-a-square');

describe('#7kyu IsSquare', () => {
  it('should work for some examples', () => {
    assert.equal(isSquare(-1), false);
    assert.equal(isSquare(3), false);
    assert.equal(isSquare(4), true);
    assert.equal(isSquare(25), true);
    assert.equal(isSquare(26), false);
  });

  it('should work for random square numbers', () => {
    let r;
    for (let i = 1; i < 100; i += 1) {
      r = (Math.random() * 0xfff0) | 0;
      assert.equal(isSquare(r * r), true);
    }
  });
});
