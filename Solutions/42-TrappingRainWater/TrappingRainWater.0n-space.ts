export function trap(height: number[]): number {
  let maxes: [number, number][] = Array.from({ length: height.length }, () => [
    0, 0,
  ]); // [maxToLeft, maxToRight]
  let maxLeft = 0;
  let maxRight = 0;

  for (let i = 0; i < height.length; i++) {
    maxes[i][0] = maxLeft;
    maxLeft = Math.max(maxLeft, height[i]);
  }

  for (let i = height.length - 1; i >= 0; i--) {
    maxes[i][1] = maxRight;
    maxRight = Math.max(maxRight, height[i]);
  }

  let water = 0;
  for (let i = 0; i < height.length; i++) {
    const [maxToTheLeft, maxToTheRight] = maxes[i];
    const currWater = Math.min(maxToTheLeft, maxToTheRight) - height[i];
    water += currWater > 0 ? currWater : 0;
  }

  return water;
}
