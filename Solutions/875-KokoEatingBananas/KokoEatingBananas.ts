function minEatingSpeed(piles: number[], h: number): number {
  let minSpeed = 1;
  let maxSpeed = Math.max(...piles);
  let minValidSpeed = maxSpeed;

  while (minSpeed <= maxSpeed) {
    const speed = Math.floor((minSpeed + maxSpeed) / 2);
    const timeToEatBananas = piles.reduce(
      (acc, pile) => acc + Math.ceil(pile / speed),
      0,
    );
    if (timeToEatBananas <= h) {
      minValidSpeed = Math.min(minValidSpeed, speed);
      maxSpeed = speed - 1;
    } else {
      minSpeed = speed + 1;
    }
  }

  return minValidSpeed;
}
