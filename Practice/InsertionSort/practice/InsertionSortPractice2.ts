const insertionSort = (nums: number[]): number[] => {
  for (let i = 1; i < nums.length; i++) {
    let currentVal = nums[i];
    for (let j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
      nums[j + 1] = nums[j];
      nums[j] = currentVal;
    }
  }

  return nums;
}


console.log(insertionSort([5, 4, 3, 2, 1]))
