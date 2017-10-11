const basicOp = require('../../8kyu/basic-mathematical-operations');

describe('#8kyu OppositeNumber', () => {
  it('should return 11', () => {
    const val = basicOp('+', 4, 7);
    expect(val).to.equal(11);
  });

  it('should return -3', () => {
    const val = basicOp('-', 15, 18);
    expect(val).to.equal(-3);
  });

  it('should return 25', () => {
    const val = basicOp('*', 5, 5);
    expect(val).to.equal(25);
  });

  it('should return 7', () => {
    const val = basicOp('/', 49, 7);
    expect(val).to.equal(7);
  });
});
