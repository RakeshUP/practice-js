import palindromeNumber from './palindromeNumber';

describe('palindromeNumber', () => {
  test('returns true if the number is a palindrome', () => {
    expect(palindromeNumber(121)).toBe(true);
    expect(palindromeNumber(-121)).toBe(true);
    expect(palindromeNumber(10)).toBe(false);
  });
});
