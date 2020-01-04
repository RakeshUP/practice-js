import reverse from './reverseInteger';

describe('reverse', () => {
  test('reverses an integer', () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(-123)).toBe(-321);
  });
});