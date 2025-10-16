function findDifference(nums1: number[], nums2: number[]): number[][] {
    let numsOneDifference: number[] = [];
    let numsTwoDifference: number[] = [];

    let distinctIntsOne = new Set<number>();
    let distinctIntsTwo = new Set<number>();

    for (let num of nums1) distinctIntsOne.add(num);
    for (let num of nums2) distinctIntsTwo.add(num);

    for (const value of distinctIntsOne)
        if (!distinctIntsTwo.has(value)) numsOneDifference.push(value);
    for (const value of distinctIntsTwo)
        if (!distinctIntsOne.has(value)) numsTwoDifference.push(value);

    return [numsOneDifference, numsTwoDifference];
}
