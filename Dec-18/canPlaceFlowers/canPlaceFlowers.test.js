import canPlaceFlowers from './canPlaceFlowers';

describe('canPlaceFlowers', () => {
  test('should be able to plant flowers in the pots', () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
    expect(canPlaceFlowers([0, 1, 0, 0, 1], 1)).toBe(false);
    expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBe(true);
    expect(canPlaceFlowers([0, 0, 1, 0, 0], 1)).toBe(true);
  });
});
