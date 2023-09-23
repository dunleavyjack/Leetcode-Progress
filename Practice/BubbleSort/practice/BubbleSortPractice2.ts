const swap = (indexOne: number, indexTwo: number, arr: number[]): void => {
  let temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
}


const bubbleSort = (nums: number[]): number[] => {
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1])
        swap(j, j + 1, nums)
    }
  }
  return nums;
}

console.log(bubbleSort([5, 4, 3, 2, 1]))
