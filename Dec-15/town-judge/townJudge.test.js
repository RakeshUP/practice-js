import townJudge from './townJudge';

describe('townJudge', () => {
  test('should find the judge of the town', () => {
    expect(townJudge(2, [[1, 2]])).toBe(2);
    expect(townJudge(3, [[1, 3], [2, 3]])).toBe(3);
    expect(townJudge(3, [[1, 3], [2, 3], [3, 1]])).toBe(-1);
    expect(townJudge(3, [[1, 2], [2, 3]])).toBe(-1);
    expect(townJudge(4, [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]])).toBe(3);
  });
});
