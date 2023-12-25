export {};

function maxProfit(prices: number[]): number {
    let p1,
        max = 0;
    let p2 = 1;

    for (let i = 0; i < prices.length, p2 < prices.length; i++, p2++) {
        if (prices[p1] < prices[p2])
            max = Math.max(max, prices[p2] - prices[p1]);
        else p1 = p2;
    }

    return max;
}
