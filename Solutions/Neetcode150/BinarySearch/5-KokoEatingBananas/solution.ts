function minEatingSpeed(piles: number[], h: number): number {
  let low = 0;
  let high = Math.max(...piles);

  let best = high;

  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const hoursToEatBananas = piles.reduce(
      (total, pile) => total + Math.ceil(pile / mid),
      0,
    );

    if (hoursToEatBananas <= h) {
      high = mid - 1;
      best = mid;
    } else {
      low = mid + 1;
    }
  }

  return best;
}
