import mergeSorted from './mergeSorted';

describe('mergeSorted', () => {
  test('merges second array into first while still being sorted', () => {
    expect(mergeSorted([1, 2, 3], [2, 5, 6])).toEqual([1, 2, 2, 3, 5, 6]);
    expect(mergeSorted([1, 4, 8], [2, 5, 6])).toEqual([1, 2, 4, 5, 6, 8]);
    expect(mergeSorted([-11, 2, 30], [-22, -5, 1, 2, 6])).toEqual([-22, -11, -5, 1, 2, 2, 6, 30]);
  });
});
