
const twoSum = (array, sum) => {
  const cacheMap = new Map();
  const indices = [];
  for (const [index, element] of Object.entries(array)) {
    const difference = sum - element;
    if (cacheMap[difference] !== undefined) {
      indices.push(parseInt(cacheMap[difference], 10));
      indices.push(parseInt(index, 10));
    } else {
      cacheMap[element] = index;
    }
  }
  return indices;
};

export default twoSum;
