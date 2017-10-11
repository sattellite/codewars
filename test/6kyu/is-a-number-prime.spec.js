/* eslint-disable no-unused-expressions */
const isPrime = require('../../6kyu/is-a-number-prime');

describe('#6kyu IsPrime', () => {
  it('should return not prime', () => {
    const val = isPrime(0);
    expect(val).to.be.false;
  });

  it('should return not prime', () => {
    const val = isPrime(1);
    expect(val).to.be.false;
  });

  it('should return prime', () => {
    const val = isPrime(2);
    expect(val).to.be.true;
  });

  it('should return prime', () => {
    const val = isPrime(13);
    expect(val).to.be.true;
  });
});
