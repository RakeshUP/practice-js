
const missingNumber = array => {
  let largestNumber = -Infinity;
  const arraySum = array.reduce((sum, element) => {
    if (element > largestNumber) {
      largestNumber = element;
    }
    // eslint-disable-next-line no-param-reassign
    sum += element;
    return sum;
  }, 0);

  return (largestNumber * (largestNumber + 1)) / 2 - arraySum;
};

export default missingNumber;
