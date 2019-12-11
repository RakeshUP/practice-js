
const palindromeNumber = (originalNumber) => {
  let number = originalNumber;
  let reversedNumber = 0;
  while (number !== 0) {
    reversedNumber = (reversedNumber * 10) + (number % 10);
    if (number > 0) {
      number = Math.floor(number / 10);
    } else {
      number = Math.ceil(number / 10);
    }
  }
  if (originalNumber === reversedNumber) {
    return true;
  }
  return false;
};

export default palindromeNumber;
