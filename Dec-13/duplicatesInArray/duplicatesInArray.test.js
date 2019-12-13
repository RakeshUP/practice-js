import duplicatesInArray from './duplicatesInArray';

describe('duplicatesInArray', () => {
  test('should return duplicate elements in an array', () => {
    expect(duplicatesInArray([1, 2, 6, 2, 8, 8])).toEqual([2, 8]);
    expect(duplicatesInArray([-11, 2, 6, -11, 8])).toEqual([-11]);
  });
});
