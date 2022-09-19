const insertionSort = (nums: number[]): number[] => {
  for (let i = 1; i < nums.length; i++) {
    let currentVal: number = nums[i];
    for (let j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
      nums[j + 1] = nums[j];
      nums[j] = currentVal;
    }
  }
  return nums;
};

console.log(insertionSort([1, 2, 3, 4, 5]))
