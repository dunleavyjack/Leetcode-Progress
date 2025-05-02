function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let a = nums1;
  let b = nums2;

  // For simplicity, always make a the smallest of the two arrays
  if (a.length > b.length) {
    [a, b] = [b, a];
  }

  const total = a.length + b.length;
  const half = Math.floor(total / 2);

  let left = 0;
  let right = a.length - 1;

  while (true) {
    let aMid = Math.floor((left + right) / 2);
    let bMid = half - aMid - 2;

    // Check the value at each mid, and the adjacent value
    let aLeft = a[aMid] ?? -Infinity;
    let aRight = a[aMid + 1] ?? Infinity;
    let bLeft = b[bMid] ?? -Infinity;
    let bRight = b[bMid + 1] ?? Infinity;

    // Correct parition reached
    if (aLeft <= bRight && bLeft <= aRight) {
      // Calculate mean based on even or odd number of elements
      if (total % 2) {
        return Math.min(aRight, bRight);
      } else {
        return (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2;
      }
    } else if (aLeft > bRight) {
      right = aMid - 1;
    } else {
      left = aMid + 1;
    }
  }
}
