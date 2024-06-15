function maxProfit(prices: number[]): number {
	let p1 = 0;
	let p2 = 0;
	let maxProfit = 0;

	while (p2 < prices.length) {
		if (prices[p1] < prices[p2]) {
			maxProfit = Math.max(maxProfit, prices[p2] - prices[p1]);
		} else p1 = p2;

		p2++;
	}

	return maxProfit;
}
