const swap = (indexOne: number, indexTwo: number, arr: number[]): void => {
  let temp: number = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
}

const quickSort = (nums: number[]): number[] => {
  let index: number = Infinity;
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[index])
  }
  return nums;
}

console.log(quickSort([5, 1, 2, 3, 4]))
