const { F, M } = require('../../6kyu/mutual-recursion');

describe('#6kyu MutualRecursion', () => {
  it('should return 1', () => {
    const val = F(0);
    expect(val).to.equal(1);
  });

  it('should return 1', () => {
    const val = F(1);
    expect(val).to.equal(1);
  });

  it('should return 0', () => {
    const val = M(0);
    expect(val).to.equal(0);
  });

  it('should return 0', () => {
    const val = M(1);
    expect(val).to.equal(0);
  });

  it('should return 6', () => {
    const val = F(10);
    expect(val).to.equal(6);
  });

  it('should return 12', () => {
    const val = M(20);
    expect(val).to.equal(12);
  });
});
