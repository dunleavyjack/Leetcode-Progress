const maxSubarraySum = (nums, len) => {
    // Initialize left/right pointer and empty max val
    let left = 0;
    let right = len;
    let max = 0;
    let windowSum = 0;

    // Find sum of initial window
    for (let i = 0; i < right; i++) {
        windowSum += nums[i];
        max = windowSum;
    }

    // Move the window down the array
    while (right < nums.length) {
        windowSum -= nums[left];
        windowSum += nums[right];
        console.log(left, right, windowSum);
        max = Math.max(windowSum, max);
        right++;
        left++;
    }

    return max ? max : null;
};

console.log(maxSubarraySum([2, 3, 4, 5, 6, 9], 3));
