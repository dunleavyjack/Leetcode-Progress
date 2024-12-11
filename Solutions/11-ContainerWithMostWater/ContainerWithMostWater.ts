function maxArea(height: number[]): number {
  // Create variable to store the maximum area
  let max = 0;
  // Create two pointers, one at the start and one at the end
  let left = 0;
  let right = height.length - 1;

  // Calculate height at each point and compare with the max
  // Then, always move the *lowest* pointer inward
  while (left <= right) {
    const l = right - left;
    const h = Math.min(height[left], height[right]);
    const area = l * h;

    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  // Return the result
  return max;
}
