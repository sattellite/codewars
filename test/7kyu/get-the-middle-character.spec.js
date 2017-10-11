const getMiddle = require('../../7kyu/get-the-middle-character');

describe('#7kyu GetMiddleCharacter', () => {
  it('should return middle character', () => {
    assert.equal(getMiddle('test'), 'es');
    assert.equal(getMiddle('testing'), 't');
    assert.equal(getMiddle('middle'), 'dd');
    assert.equal(getMiddle('A'), 'A');
  });
});
