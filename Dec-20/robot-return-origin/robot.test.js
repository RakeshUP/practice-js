import robot from './robot';

describe('robot', () => {
  test('should return true if the robot returns to origin', () => {
    expect(robot('UD')).toBe(true);
    expect(robot('LL')).toBe(false);
  });
});
