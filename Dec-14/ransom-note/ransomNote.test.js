import ransomNote from './ransomNote';

describe('ransomNote', () => {
  test('should return true when ransom string construction is possible', () => {
    expect(ransomNote('a', 'b')).toBe(false);
    expect(ransomNote('aa', 'ab')).toBe(false);
    expect(ransomNote('aa', 'aab')).toBe(true);
  });
});
