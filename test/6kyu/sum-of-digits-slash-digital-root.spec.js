const digital_root = require('../../6kyu/sum-of-digits-slash-digital-root');

describe('#6kyu DigitalRoot', () => {
  it('should calculate digital root', () => {
    assert.equal(digital_root(16), 7);
    assert.equal(digital_root(195), 6);
    assert.equal(digital_root(992), 2);
    assert.equal(digital_root(999999999999), 9);
    assert.equal(digital_root(167346), 9);
    assert.equal(digital_root(0), 0);
  });
});
