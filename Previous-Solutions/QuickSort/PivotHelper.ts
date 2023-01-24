// This is my version and slightly different than recommended way

const swap = (indexOne: number, indexTwo: number, arr: number[]) => {
  let temp: number = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
}


const pivotHelper = (nums: number[], start: number = 0) => {
  let pivotValue: number = nums[start];
  let swapIndex: number = 0;

  for (let i = start + 1; i < nums.length; i++) {
    if (nums[i] < pivotValue) {
      swapIndex++;
      swap(i, swapIndex, nums);
    }
  }

  swap(start, swapIndex, nums);


  return swapIndex
}
console.log(pivotHelper([5, 1, 2, 3, 4, 6]))
