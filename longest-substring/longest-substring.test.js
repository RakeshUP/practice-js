import longestSubstring from './longest-substring';

describe('longestSubstring', () => {
  test('should find the longest substring without repeating characters', () => {
    expect(longestSubstring('abcabcbb')).toBe(3);
    expect(longestSubstring('bbbbb')).toBe(1);
    expect(longestSubstring('pwwkeaw')).toBe(4);
    expect(longestSubstring('abcdefbilxd')).toBe(8);
    expect(longestSubstring('pewwkew')).toBe(3);
  });
});
