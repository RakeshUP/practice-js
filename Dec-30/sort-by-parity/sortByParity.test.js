import sortByParity from './sortByParity';

describe('sortByParity', () => {
  test('sorts an array with even numbers in first', () => {
    expect(sortByParity([3, 1, 2, 4])).toEqual([4, 2, 3, 1]);
  });
});
