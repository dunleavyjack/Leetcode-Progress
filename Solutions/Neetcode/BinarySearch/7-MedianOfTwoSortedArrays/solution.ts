export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  let a = nums1;
  let b = nums2;

  if (a.length > b.length) [a, b] = [b, a];

  let totalLen = a.length + b.length;

  let left = 0;
  let right = a.length - 1;

  while (true) {
    let midA = Math.floor((left + right) / 2);
    let midB = Math.floor(totalLen / 2) - midA - 2;

    const leftA = a[midA] ?? -Infinity;
    const rightA = a[midA + 1] ?? Infinity;

    const leftB = b[midB] ?? -Infinity;
    const rightB = b[midB + 1] ?? Infinity;

    if (leftA <= rightB && leftB <= rightA) {
      if (totalLen % 2) {
        return Math.min(rightA, rightB);
      } else {
        return (Math.max(leftA, leftB) + Math.min(rightA, rightB)) / 2;
      }
    } else if (leftA > rightB) {
      right = midA - 1;
    } else {
      left = midA + 1;
    }
  }
}
