/* eslint-disable no-param-reassign */
const sumOfPerfectSquares = (number, count = 0) => {
  count += 1;

  const nearestRoundedSqrt = Math.floor(Math.sqrt(number));
  if (number - nearestRoundedSqrt ** 2 === 0) {
    return count;
  }
  if (number <= 3) {
    return count + number;
  }

  let maxCount = number;

  for (let i = nearestRoundedSqrt; i > 0; i -= 1) {
    const square = i ** 2;
    const returnedCount = sumOfPerfectSquares(number - square, count);
    maxCount = Math.min(maxCount, returnedCount);
  }
  return maxCount;
};

export {
  sumOfPerfectSquares,
};
