function buyChoco(prices: number[], money: number): number {
    let m1 = Infinity;
    let m1Index = 0;
    let m2 = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < m1) {
            m1 = prices[i];
            m1Index = i;
        }
    }

    for (let i = 0; i < prices.length; i++) {
        if (i !== m1Index && prices[i] < m2) m2 = prices[i];
    }

    return m1 + m2 > money ? money : money - m1 - m2;
}
