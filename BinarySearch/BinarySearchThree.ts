const binarySearch = (nums: number[], target: number): number => {
    // Create a pointer at beginning and end of nums array
    let left: number = 0;
    let right: number = nums.length - 1;

    // Create condition while left pointer is less than right pointer
    while (left < right) {
        // Create a pointer in the middle of the array
        let mid = Math.floor((left + right) / 2);
        console.log(nums[left], nums[mid], nums[right]);

        // Check if middle value equals target
        if (nums[mid] === target) return mid;

        // If target is smaller than mid, move right pointer down
        if (target < nums[mid]) right = mid;
        else left = mid;
    }

    // Return -1 if target not in nums array
    return -1;
};

console.log(
    binarySearch(
        [
            5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
            96, 98, 99,
        ],
        95
    )
);
