function minEatingSpeed(piles: number[], h: number): number {
  let minSpeed = 0;
  let maxSpeed = Math.max(...piles);

  // The result: the speed for eating bananans faster than `h`
  let bestMinSpeed = maxSpeed;

  while (minSpeed <= maxSpeed) {
    // Calcualte the "medium" speed between the min and max pointers
    const speed = Math.floor((minSpeed + maxSpeed) / 2);
    // Use that speed to calculate the amount of time required to eat all bananans
    const hoursToEatBananas = piles.reduce(
      (total, piles) => total + Math.ceil(piles / speed),
      0,
    );

    if (hoursToEatBananas <= h) {
      // Check if the value is less than the current best min and try to find a smaller max speed
      bestMinSpeed = Math.min(bestMinSpeed, speed);
      maxSpeed = speed - 1;
    } else {
      // Speed was too small, look for a faster speed
      minSpeed = speed + 1;
    }
  }

  return bestMinSpeed;
}
