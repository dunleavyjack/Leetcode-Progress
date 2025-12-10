function maxProfit(prices: number[]): number {
  let bestProfit = 0;

  let left = 0;
  for (let right = 1; right < prices.length; right++) {
    const profit = prices[right] - prices[left];
    if (profit < 0) {
      left = right;
    } else {
      bestProfit = Math.max(bestProfit, profit);
    }
  }

  return bestProfit;
}
