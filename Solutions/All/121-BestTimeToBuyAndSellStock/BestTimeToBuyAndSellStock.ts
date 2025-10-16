function maxProfit(prices: number[]): number {
  // Create two pointers, and a variable to track max value
  let max = 0;
  let left = 0;
  let right = 1;

  // Iterate until right reaches the end of `prices`
  while (right < prices.length) {
    // Calculate current profit, and compare with the current max
    const profit = prices[right] - prices[left];
    max = Math.max(max, profit);

    // If the left price is lower than the right, jump the left pointer to the right
    if (prices[left] > prices[right]) {
      left = right;
    }
    // No matter what, increment the right
    right++;
  }

  // Return the best result
  return max;
}
