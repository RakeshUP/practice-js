/* eslint-disable no-param-reassign */

const stocks = stockPrices => {
  let minPrice = Infinity;
  return stockPrices.reduce((maxProfit, price) => {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
    return maxProfit;
  }, 0);
};

export default stocks;
