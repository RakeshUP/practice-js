
const largestNumber = array => {
  const alphabeticalCompare = (a, b) => (`${a}${b}` > `${b}${a}` ? -1 : 1);

  return array.sort(alphabeticalCompare)
    .join('');
};

export default largestNumber;
