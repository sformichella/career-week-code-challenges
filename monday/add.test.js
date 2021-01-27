const { add } = require('./add');

describe('date adder', () => {
  it('should add 100ms to a date', () => {
    const testDate = new Date(1000000);

    const actual = add(testDate, '100ms');
    const expected = new Date('1970-01-01T00:16:40.100Z');

    expect(actual).toEqual(expected);
  });

  it('should add 30 days', () => {

  });
});
