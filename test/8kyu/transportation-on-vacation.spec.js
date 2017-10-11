const rentalCarCost = require('../../8kyu/transportation-on-vacation');

describe('#8kyu TransportationOnVacation', () => {
  it('should work for under 3 days #1', () => {
    const val = rentalCarCost(1);
    expect(val).to.equal(40);
  });

  it('should work for under 3 days #2', () => {
    const val = rentalCarCost(2);
    expect(val).to.equal(80);
  });

  it('should work for under 7 days #1', () => {
    const val = rentalCarCost(3);
    expect(val).to.equal(100);
  });

  it('should work for under 7 days #2', () => {
    const val = rentalCarCost(4);
    expect(val).to.equal(140);
  });

  it('should work for under 7 days #3', () => {
    const val = rentalCarCost(5);
    expect(val).to.equal(180);
  });

  it('should work for under 7 days #4', () => {
    const val = rentalCarCost(6);
    expect(val).to.equal(220);
  });

  it('should work for under 7 or more days #1', () => {
    const val = rentalCarCost(7);
    expect(val).to.equal(230);
  });

  it('should work for under 7 or more days #2', () => {
    const val = rentalCarCost(8);
    expect(val).to.equal(270);
  });

  it('should work for under 7 or more days #3', () => {
    const val = rentalCarCost(9);
    expect(val).to.equal(310);
  });

  it('should work for under 7 or more days #4', () => {
    const val = rentalCarCost(10);
    expect(val).to.equal(350);
  });
});
