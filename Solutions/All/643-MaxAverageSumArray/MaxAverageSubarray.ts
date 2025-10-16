function findMaxAverage(nums: number[], k: number): number {
    let left = 0;
    let right = k;
    let windowSum = 0;
    let max = 0;

    // Calculate sum of initial window
    for (let i = 0; i < k; i++) windowSum += nums[i];

    // Calculate max from sum of initial window
    max = windowSum / k;

    // Slide window down `nums` until reaching the end.
    // Prevent unnecessary calculations by only removing last item and adding next item.
    while (right < nums.length) {
        windowSum -= nums[left];
        windowSum += nums[right];
        max = Math.max(windowSum / k, max);
        left++, right++;
    }

    return max;
}
