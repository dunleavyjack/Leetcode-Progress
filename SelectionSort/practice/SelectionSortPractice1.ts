const swap = (indexOne: number, indexTwo: number, arr: number[]): void => {
  let temp: number = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
}

const selectionSort = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j], min)
      if (nums[j] < nums[min]) {
        min = j
      }
    }
    let temp: number = nums[min];
    nums[min] = nums[i];
    nums[i] = temp;
  }
  return nums
}


console.log(selectionSort([5, 4, 3, 2, 1]))
