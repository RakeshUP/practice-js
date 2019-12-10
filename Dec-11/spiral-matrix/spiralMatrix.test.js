import spiralMatrix from './spiralMatrix';

describe('spiralMatrix', () => {
  test('converts 2d matrix to 1d matrix', () => {
    expect(spiralMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    expect(spiralMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ])).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });
});
