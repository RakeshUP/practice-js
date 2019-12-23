import baseballGame from './baseballGame';

describe('baseballGame', () => {
  test('should return the sum of scores', () => {
    expect(baseballGame(['5', '2', 'C', 'D', '+'])).toBe(30);
    expect(baseballGame(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27);
  });
});
