function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [-1, -1];
}
