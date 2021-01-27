const { revenue } = require('./revenue');
const transactionsData = require('./transactions');
const revenues = require('./revenues');

describe('revenue', () => {
  it('returns the daily revenue', () => {
    const actual = revenue(transactionsData);

    expect(actual).toEqual(revenues);
  });
});
