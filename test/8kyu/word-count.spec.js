const countWords = require('../../8kyu/word-count');

describe('#8kyu WordCount', () => {
  it('should work in basic form of problem', () => {
    assert.equal(countWords('Hello'), 1);
    assert.equal(countWords('Hello, World!'), 2);
    assert.equal(countWords('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'), 19);
    assert.equal(countWords(''), 0);
    assert.equal(countWords('With! Symbol@ #Around! (Every) %Word$'), 5);
    assert.equal(countWords('Dear   Victoria, I love  to press   space button.'), 8);
  });

  it('should work with spaces around string', () => {
    assert.equal(countWords(' Arthur '), 1);
    assert.equal(countWords(' David'), 1);
    assert.equal(countWords('Nelson '), 1);
    assert.equal(countWords('  Hello Gomer  '), 2);
    assert.equal(countWords('  Hello     Bart  '), 2);
  });

  it('should work with non-whitespace (ex. breakspace) chars', () => {
    assert.equal(countWords('﻿Hello﻿World '), 2);
    assert.equal(countWords('Hello﻿World'), 2);
  });
});
