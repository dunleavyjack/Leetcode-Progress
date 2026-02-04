function maxArea(height: number[]): number {
  let greatestArea = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    greatestArea = Math.max(greatestArea, area);

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return greatestArea;
}
