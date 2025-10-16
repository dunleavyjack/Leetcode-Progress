function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const result: number[][] = [];

  let p1 = 0;
  let p2 = 0;
  while (p1 < nums1.length && p2 < nums2.length) {
    const [nums1ID, nums1Val] = nums1[p1];
    const [nums2ID, nums2Val] = nums2[p2];

    // If the current id at nums1 and nums2 is the same, sum their values and push to the sorted result
    if (nums1ID === nums2ID) {
      result.push([nums1ID, nums1Val + nums2Val]);
      p1++;
      p2++;
      // If the id of nums1 is less than the id of nums2, push it to the sorted result
    } else if (nums1ID < nums2ID) {
      result.push([nums1ID, nums1Val]);
      p1++;
      // Otherwise, the current id of nums2 must be less, and it should be pushed to the result
    } else {
      result.push([nums2ID, nums2Val]);
      p2++;
    }
  }

  // Check for excess from nums1
  while (p1 < nums1.length) {
    result.push(nums1[p1]);
    p1++;
  }

  // Check for excess from nums2
  while (p2 < nums2.length) {
    result.push(nums2[p2]);
    p2++;
  }

  return result;
}
