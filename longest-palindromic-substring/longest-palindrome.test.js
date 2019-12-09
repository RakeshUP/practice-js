import longestPalindrome from './longest-palindrome';

describe('longestPalindrome', () => {
  test('should return length of longest palindromic substring', () => {
    expect(longestPalindrome('babad')).toBe('aba');
    expect(longestPalindrome('mommalayalam')).toBe('malayalam');
  });
});
