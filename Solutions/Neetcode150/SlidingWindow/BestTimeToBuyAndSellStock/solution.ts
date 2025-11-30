function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  let left = 0;
  let right = 1;

  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    maxProfit = Math.max(profit, maxProfit);

    if (prices[left] > prices[right]) {
      left = right;
    }

    right++;
  }

  return maxProfit;
}
