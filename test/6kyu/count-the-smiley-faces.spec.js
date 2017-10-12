const countSmileys = require('../../6kyu/count-the-smiley-faces');

describe('#6kyu CountSmileyFaces', () => {
  it('should count smileys', () => {
    assert.equal(countSmileys([]), 0);
    assert.equal(countSmileys([':D', ':~)', ';~D', ':)']), 4);
    assert.equal(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
    assert.equal(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
  });
});
