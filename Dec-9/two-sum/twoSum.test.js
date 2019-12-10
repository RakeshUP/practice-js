import twoSum from './twoSum';

describe('twoSum', () => {
  test('should return array of indices of elements which add up to given sum', () => {
    expect(twoSum([2, 4, 6, 7, 8], 9)).toEqual([0, 3]);
  });
});
