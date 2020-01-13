import uniquePaths from './uniquePaths';

describe('uniquePaths', () => {
  test('returns number of unique paths', () => {
    expect(uniquePaths(3, 2)).toBe(3);
    expect(uniquePaths(7, 3)).toBe(28);
  });
});
