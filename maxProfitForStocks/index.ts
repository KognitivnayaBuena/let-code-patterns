// O(n) solution
function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let curMin = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];

    maxProfit = Math.max(maxProfit, price - curMin);
    curMin = Math.min(curMin, price);
  }

  return maxProfit;
}
