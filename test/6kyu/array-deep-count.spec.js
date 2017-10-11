const deepCount = require('../../6kyu/array-deep-count');

describe('#6kyu ArrayDeepCount', () => {
  it('should return 0', () => {
    const val = deepCount([]);
    expect(val).to.equal(0);
  });

  it('should return 3', () => {
    const val = deepCount([1, 2, 3]);
    expect(val).to.equal(3);
  });

  it('should return 4', () => {
    const val = deepCount(['x', 'y', ['z']]);
    expect(val).to.equal(4);
  });

  it('should return 7', () => {
    const val = deepCount([1, 2, [3, 4, [5]]]);
    expect(val).to.equal(7);
  });

  it('should return 8', () => {
    const val = deepCount([[[[[[[[[]]]]]]]]]);
    expect(val).to.equal(8);
  });
});

