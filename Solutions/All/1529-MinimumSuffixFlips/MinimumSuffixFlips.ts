function minFlips(target: string): number {
  let flips = 0; // Amount of times a flip occured
  let currBulbState = 0; // The state of result bulbs

  for (let i = 0; i < target.length; i++) {
    const idealState = Number(target[i]); // The current state of the target

    // If the current state of the result bulb is not the same as the target,
    // flip it and update the current bulb state
    if (currBulbState !== idealState) {
      flips++;
      currBulbState = currBulbState ? 0 : 1; // "Flip" the bulb state
    }
  }

  return flips;
}
