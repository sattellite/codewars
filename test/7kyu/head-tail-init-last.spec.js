const {
  head, tail, init, last,
} = require('../../7kyu/head-tail-init-last');

describe('#7kyu HeadTailInitLast', () => {
  it('should return head', () => {
    const val = head([5, 1]);
    expect(val).to.equal(5);
  });

  it('should return tail', () => {
    const val = tail([1]);
    expect(val).to.deep.equal([]);
  });

  it('should return init', () => {
    const val = init([1, 5, 7, 9]);
    expect(val).to.deep.equal([1, 5, 7]);
  });

  it('should return last', () => {
    const val = last([7, 2]);
    expect(val).to.equal(2);
  });
});
