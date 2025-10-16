function getCommon(nums1: number[], nums2: number[]): number {
    let p1 = 0;
    let p2 = 0;

    while (p1 < nums1.length && p2 < nums2.length) {
        // Base case
        if (nums1[p1] === nums2[p2]) return nums1[p1];

        nums1[p1] < nums2[p2] ? p1++ : p2++;
    }

    return -1;
}
