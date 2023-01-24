const swap = (valOne: number, valTwo: number, arr: number[]) => {
  let temp: number = arr[valOne];
  arr[valOne] = arr[valTwo];
  arr[valTwo] = temp;
}


const bubbleSort = (nums: number[]): number[] => {
  // Outer loop that progressively gets smaller
  for (let i = nums.length - 1; i >= 0; i--) {
    let noSwaps: boolean = true;
    for (let j = 0; j < i; j++) {
      if (nums[j + 1] < nums[j]) {
        swap(j + 1, j, nums);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return nums;
}

console.log(bubbleSort([5, 4, 3, 2, 1]))
