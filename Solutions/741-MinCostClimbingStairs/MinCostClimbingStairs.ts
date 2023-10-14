function minCostClimbingStairs(cost: number[]): number {
    let total = 0;

    for (let i = 0; i < cost.length; i++) {
        console.log(cost[i], cost[i + 1], total);
        if (cost[i + 1] < cost[i]) {
            total += cost[i + 1];
            i++;
        } else {
            if (!cost[i + 1]) break;
            total += cost[i];
        }
    }

    return total;
}
