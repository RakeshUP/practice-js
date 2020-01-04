/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function (A) {
  const array = [];
  for (const element of A) {
    if (element % 2 === 0) {
      array.unshift(element);
    } else {
      array.push(element);
    }
  }
  return array;
};

export default sortArrayByParity;
