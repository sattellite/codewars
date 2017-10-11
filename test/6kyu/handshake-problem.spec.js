const getParticipants = require('../../6kyu/handshake-problem');

describe('#6kyu HandshakeProblem', () => {
  it('should be 1 participant', () => {
    const val = getParticipants(0);
    expect(val).to.equal(1);
  });

  it('should be 2 participants', () => {
    const val = getParticipants(1);
    expect(val).to.equal(2);
  });

  it('should be 3 participants', () => {
    const val = getParticipants(3);
    expect(val).to.equal(3);
  });

  it('should be 4 participants', () => {
    const val = getParticipants(6);
    expect(val).to.equal(4);
  });

  it('should be 5 participants', () => {
    const val = getParticipants(7);
    expect(val).to.equal(5);
  });

  it('should be 431 participants', () => {
    const val = getParticipants(92665);
    expect(val).to.equal(431);
  });

  it('should be 959 participants', () => {
    const val = getParticipants(459361);
    expect(val).to.equal(959);
  });
});
