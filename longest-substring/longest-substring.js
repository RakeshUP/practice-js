
const longestSubstring = (string) => {
  let windowFirstIndex = 0;
  let windowLastIndex = 0;
  const indexMap = new Map();
  let longestSubStr = 0;

  for (let i = 0; i < string.length; i += 1) {
    const character = string[i];
    if (indexMap[character] === undefined) {
      indexMap[character] = i;
    } else {
      const length = windowLastIndex - windowFirstIndex;
      windowFirstIndex = indexMap[character] + 1;
      longestSubStr = length > longestSubStr ? length : longestSubStr;
      indexMap[character] = i;
    }
    windowLastIndex += 1;
  }
  return longestSubStr;
};

export default longestSubstring;
