/* eslint-disable no-param-reassign */

const houseRobber = (houses, i = 0, moneyStolen = 0) => {
  if (houses[i] === undefined) {
    return moneyStolen;
  }

  let maxMoneyStolen = 0;

  for (; i < houses.length; i += 1) {
    maxMoneyStolen = Math.max(maxMoneyStolen,
      houseRobber(houses, i + 2, moneyStolen + houses[i]));
  }
  return maxMoneyStolen;
};

export default houseRobber;
