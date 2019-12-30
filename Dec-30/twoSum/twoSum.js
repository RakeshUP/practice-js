/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const cache = {};
  let result;
  for (const [index, element] of Object.entries(nums)) {
    const difference = target - element;
    const inMap = cache[difference];
    if (inMap !== undefined) {
      result = [inMap, parseInt(index, 10)];
      break;
    } else {
      cache[element] = parseInt(index, 10);
    }
  }
  return result;
};

export default twoSum;
