const { zero, one, two, three, four, five, six, seven, eight, nine,
  plus, minus, times, dividedBy } = require('../../5kyu/calculating-with-functions');

describe('#5kyu CalculatingWithFunctions', () => {
  it('should calculate with functions', () => {
    assert.equal(seven(times(five())), 35);
    assert.equal(four(plus(nine())), 13);
    assert.equal(four(plus(zero())), 4);
    assert.equal(eight(minus(three())), 5);
    assert.equal(six(dividedBy(two())), 3);
    assert.equal(six(dividedBy(one())), 6);
  });
});
