const prefill = require('../../5kyu/prefill-an-array');

describe('#5kyu PrefillAnArray', () => {
  it('should return array of integers', () => {
    const val = prefill(3,1);
    expect(val).to.deep.equal([1,1,1]);
  });

  it('should return array if strings', () => {
    const val = prefill(2,'abc');
    expect(val).to.deep.equal(['abc','abc']);
  });

  it('should takes string "integer"', () => {
    const val = prefill('1',1);
    expect(val).to.deep.equal([1]);
  });

  it('should takes any type of "fill" argument', () => {
    const val = prefill(3, prefill(2,'2d'));
    expect(val).to.deep.equal([['2d','2d'],['2d','2d'],['2d','2d']]);
  });

  it('should throw TypeError on incorrect number of element', () => {
    expect(() => prefill('xyz', 1)).to.throw(TypeError);
  });

  it('TypeError messages should be "X is invalid"', () => {
    let val;
    try {
      prefill('xyz', 1);
    } catch (e) {
      val = e.message;
    }
    expect(val).to.equal('xyz is invalid');
  });

  it('should throw TypeError on float', () => {
    expect(() => prefill('xyz', 1)).to.throw(TypeError);
  });
});
