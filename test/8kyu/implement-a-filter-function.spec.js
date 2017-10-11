/* eslint-disable no-array-constructor */
const Array = require('../../8kyu/implement-a-filter-function');

describe('#8kyu ImplementFilterFunction', () => {
  it('should be a function', () => {
    const val = new Array(1, 2);
    expect(typeof val.filter).to.equal('function');
  });

  it('should throw TypeError without comparator', () => {
    const val = new Array(1, 2);
    expect(() => val.filter()).to.throw(TypeError);
  });

  it('should return values bigger than 5', () => {
    const val = new Array(1, 2, 3, 4, 5, 6, 7);
    const compare = a => a > 5;
    expect(val.filter(compare)).to.deep.equal([6, 7]);
  });

  it('should return values smaller than 5', () => {
    const val = new Array(1, 2, 3, 4, 5, 6, 7);
    const compare = a => a < 5;
    expect(val.filter(compare)).to.deep.equal([1, 2, 3, 4]);
  });

  it('should return values equals to 5', () => {
    const val = new Array(5, 2, 3, 4, 5, 6, 7);
    const compare = a => a === 5;
    expect(val.filter(compare)).to.deep.equal([5, 5]);
  });
});
