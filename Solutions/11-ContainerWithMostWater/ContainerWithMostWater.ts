function maxArea(height: number[]): number {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    height[left] < height[right] ? left++ : right--;
  }

  return max;
}
