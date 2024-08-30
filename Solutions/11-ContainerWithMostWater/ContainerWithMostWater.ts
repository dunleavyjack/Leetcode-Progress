function maxArea(height: number[]): number {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    height[left] < height[right] ? left++ : right--;
  }

  return max;
}
