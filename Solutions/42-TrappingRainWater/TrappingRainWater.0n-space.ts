export function trap(height: number[]): number {
  const maxLeft = new Array(height.length).fill(0);
  const maxRight = new Array(height.length).fill(0);

  let rainWater = 0;

  // Iterate through the input array calcualting the prefix height
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    max = Math.max(max, height[i]);
    maxLeft[i] = max;
  }

  // Reset max
  max = 0;

  // Iterate through the input array *backwards* calcualting the suffix height
  for (let i = height.length - 1; i >= 0; i--) {
    max = Math.max(max, height[i]);
    maxRight[i] = max;
  }

  // Iterate through the input array again, using the prefix and suffix arrays to determine
  // the amount of rain water. For each index, the prefixMax will contain the current max up
  // until that point and the suffixMax will contain the current max from the other side.
  for (let i = 0; i < height.length; i++) {
    rainWater += Math.min(maxLeft[i], maxRight[i]) - height[i];
  }

  return rainWater;
}
