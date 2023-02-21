export {};

function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let left = 0;
    let right = 1;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        } else {
            left = right;
        }
        right++;
    }

    return maxProfit;
}
