const array = require('../../8kyu/remove-first-and-last-character-part-two');

describe('#8kyu RemoveFirstAndLastCharacters', () => {
  it('should return null if empty string', () => {
    const val = '';
    expect(array(val)).to.equal(null);
  });

  it('should return null if string is short #1', () => {
    const val = '1';
    expect(array(val)).to.equal(null);
  });

  it('should return null if string is short #2', () => {
    const val = '1,2';
    expect(array(val)).to.equal(null);
  });

  it('should return string without first and last chars', () => {
    const val = '1,2,3';
    expect(array(val)).to.equal('2');
  });

  it('should parse string when separator is comma with space', () => {
    const val = '1,2, 3, 4';
    expect(array(val)).to.equal('2,3');
  });
});
