/* eslint-disable no-param-reassign */

const canPlaceFlowers = (pots, numberOfFlowers) => {
  for (let i = 0; i < pots.length; i += 1) {
    if (pots[i] === 0 && (pots[i - 1] === 0 || i === 0)
      && (i === pots.length - 1 || pots[i + 1] === 0)) {
      numberOfFlowers -= 1;
      pots[i] = 1;
    }
  }
  if (numberOfFlowers <= 0) {
    return true;
  }
  return false;
};

export default canPlaceFlowers;
