class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;

        int leftPointer = 0;
        int rightPointer = 1;

        while (rightPointer < prices.length) {
            if (prices[leftPointer] < prices[rightPointer]) {
                int profit = prices[rightPointer] - prices[leftPointer];
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            } else {
                leftPointer = rightPointer;
            }
            rightPointer++;
        }

        return maxProfit;
    }
}