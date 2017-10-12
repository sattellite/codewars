const disemvowel = require('../../7kyu/disemvowel-trolls');


describe('#7kyu DisemvowelTrolls', () => {
  it('should remove vowels', () => {
    assert.equal(disemvowel('This website is for losers LOL!'), 'Ths wbst s fr lsrs LL!');
    assert.equal(disemvowel('No offense but,\nYour writing is among the worst I\'ve ever read'), 'N ffns bt,\nYr wrtng s mng th wrst \'v vr rd');
    assert.equal(disemvowel('What are you, a communist?'), 'Wht r y,  cmmnst?');
  });
});
