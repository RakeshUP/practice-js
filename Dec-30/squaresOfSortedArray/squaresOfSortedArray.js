/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  const squared = A.map(element => element ** 2);
  return squared.sort((a, b) => a - b);
};

export default sortedSquares;