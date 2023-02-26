function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor(right / 2);

    while (left <= right) {
        if (nums[mid] === target) return mid;
        target > nums[mid] ? (left = mid + 1) : (right = mid - 1);

        mid = Math.floor((left + right) / 2);
    }

    return -1;
}
