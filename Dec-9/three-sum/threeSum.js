const threeSumMain = (array, sum, resultArray, pairsOfThree) => {
  if (resultArray.length === 3 && sum !== 0) {
    return null;
  }
  if (resultArray.length === 3 && sum === 0) {
    return resultArray;
  }

  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    if (resultArray.length <= 2) {
      resultArray.push(element);
      const result = threeSumMain(array.slice(i + 1), sum - element, resultArray, pairsOfThree);
      if (result !== null) {
        const arrayCopy = [...resultArray];
        pairsOfThree.push(arrayCopy);
      }
      resultArray.pop(element);
    }
  }
  return null;
};

function threeSum(array, sum) {
  if (array.length < 3) {
    throw Error('Array length is less than 3');
  }
  if (typeof sum !== 'number') {
    throw Error('Give a number as second argument');
  }
  const pairsOfThree = [];
  threeSumMain(array, sum, [], pairsOfThree);
  if (pairsOfThree.length === 0) {
    return null;
  }
  return pairsOfThree;
}

export {
  threeSum,
};
