// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let leftPointer = 0;
    let rightPointer = 1;
    let maxProfit = 0;

    while (rightPointer < prices.length) {
        if (prices[leftPointer] < prices[rightPointer]) {
            let profit = prices[rightPointer] - prices[leftPointer];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        } else {
            leftPointer = rightPointer;
        }
        rightPointer++;
    }
    return maxProfit;
};

const input = [7, 6, 4, 3, 1];
maxProfit(input);
