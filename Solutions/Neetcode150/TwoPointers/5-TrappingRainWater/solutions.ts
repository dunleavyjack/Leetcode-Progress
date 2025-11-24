function trap(height: number[]): number {
  let prefixMaxes = new Array(height.length).fill(0);
  let postfixMaxes = new Array(height.length).fill(0);

  let prefixMax = 0;
  for (let i = 0; i < height.length; i++) {
    prefixMaxes[i] = prefixMax;
    prefixMax = Math.max(prefixMax, height[i]);
  }

  let postfixMax = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    postfixMaxes[i] = postfixMax;
    postfixMax = Math.max(postfixMax, height[i]);
  }

  let totalWater = 0;
  for (let i = 0; i < height.length; i++) {
    const water = Math.min(prefixMaxes[i], postfixMaxes[i]) - height[i];
    if (water > 0) totalWater += water;
  }

  return totalWater;
}
