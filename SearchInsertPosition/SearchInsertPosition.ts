function searchInsert(nums: number[], target: number): number {
    // Iterate through the nums array
    for (let i: number = 0; i < nums.length; i++) {
        // Check if target matches each number in nums array
        if (nums[i] === target) return i;

        // If target is less than num (meaning it's inside) return that value
        if (target < nums[i]) {
            return i;
        }
    }

    // If code gets here, the target is larger than anything in the arr to return new index at end of arr
    return nums.length;
}

console.log(searchInsert([1, 3, 5, 6], 0));
