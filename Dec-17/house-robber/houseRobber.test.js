import houseRobber from './houseRobber';

describe('houseRobber', () => {
  test('should return the maximum money possible to steal in a night', () => {
    expect(houseRobber([2, 3, 2])).toBe(4);
    expect(houseRobber([1, 3, 6, 5])).toBe(8);
  });

  test('should return the maximum money possible to steal in a night', () => {
    expect(houseRobber([1, 3, 6, 4])).toBe(7);
    expect(houseRobber([1, 3, 1, 3, 100])).toBe(103);
  });
});
