import isBoomerang from './validBoomerang';

describe('isBoomerang', () => {
  test('checks if the points given forms a valid boomerang', () => {
    expect(isBoomerang([[1, 1], [2, 3], [3, 2]])).toBe(true);
    expect(isBoomerang([[1, 1], [2, 2], [3, 3]])).toBe(false);
  });
});