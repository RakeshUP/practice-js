import sortedSquared from './squaresOfSortedArray';

describe('sortedSquares', () => {
  test('returns the squares of elements in sorted order', () => {
    expect(sortedSquared([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(sortedSquared([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
  });
});
