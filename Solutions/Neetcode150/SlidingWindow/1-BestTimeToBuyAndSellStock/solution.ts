function maxProfit(prices: number[]): number {
  let max = 0;

  let left = 0;
  let right = 1;

  while (right < prices.length) {
    const buy = prices[left];
    const sell = prices[right];

    const profit = sell - buy;
    max = Math.max(profit, max);

    if (buy > sell) {
      left = right;
    }

    right++;
  }

  return max;
}
