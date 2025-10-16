function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let leftPointer: number = 0;
    let rightPointer: number = 1;

    while (rightPointer < prices.length) {
        if (prices[leftPointer] < prices[rightPointer]) {
            let potentialProfit: number =
                prices[rightPointer] - prices[leftPointer];
            maxProfit = Math.max(potentialProfit, maxProfit);
        } else {
            leftPointer = rightPointer;
        }
        rightPointer++;
    }

    return maxProfit;
}
