const printArray = require('../../8kyu/printing-array-elements-with-comma-delimiters');

describe('#8kyu PrintingArrayWithCommaDelimiters', () => {
  it('should return string of array', () => {
    const val = printArray([2, 4, 5, 2]);
    expect(val).to.equal('2,4,5,2');
  });
});
