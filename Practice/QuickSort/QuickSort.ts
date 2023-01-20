const quickSort = (arr: number[], left: number = 0, right: number = arr.legnth - 1): number[] => {
  let pivotIndex = pivot(arr, left, right)
  if (left < right) {
    // Left
    quickSort(arr, left, pivotIndex - 1);

    // Right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr
}


console.log(quickSort([5, 1, 2, 3, 4]))
