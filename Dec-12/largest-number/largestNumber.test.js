import largestNumber from './largestNumber';

describe('largestNumber', () => {
  test('should return the largest number formed using an array', () => {
    expect(largestNumber([10, 2])).toBe('210');
    expect(largestNumber([3, 30, 34, 5, 9])).toBe('9534330');
  });
});
