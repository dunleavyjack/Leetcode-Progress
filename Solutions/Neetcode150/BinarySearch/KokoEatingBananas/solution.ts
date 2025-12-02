function minEatingSpeed(piles: number[], h: number): number {
  let minSpeed = 0;
  let maxSpeed = Math.max(...piles);

  let bestSpeed = maxSpeed;

  while (minSpeed <= maxSpeed) {
    const speed = Math.floor((maxSpeed + minSpeed) / 2);

    const hoursToEatBananas = piles.reduce(
      (total, pile) => total + Math.ceil(pile / speed),
      0,
    );
    if (hoursToEatBananas <= h) {
      bestSpeed = Math.min(bestSpeed, speed);
      maxSpeed = speed - 1;
    } else {
      minSpeed = speed + 1;
    }
  }

  return bestSpeed;
}
