
const findIndexToInsert = (array, element) => array.findIndex((value) => element <= value);

const mergeSorted = (array1, array2) => {
  array2.forEach((element) => {
    const index = findIndexToInsert(array1, element);
    if (index === -1) {
      array1.push(element);
    } else {
      array1.splice(index, 0, element);
    }
  });
  return array1;
};

export default mergeSorted;
