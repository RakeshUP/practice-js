import stocks from './stocks';

describe('stocks', () => {
  test('should return the maximum profit', () => {
    expect(stocks([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(stocks([7, 6, 4, 3, 1])).toBe(0);
  });
});
