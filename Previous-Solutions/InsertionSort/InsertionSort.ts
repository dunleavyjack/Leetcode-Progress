export {};

const insertionSort = (nums: number[]): number[] => {
    // Outer loop starting at second element
    for (let i = 1; i < nums.length; i++) {
        // Assign value for current number
        let currentVal = nums[i];

        // Inner loop to compare and swap current number with previous values, if previous values are greater than current
        for (let j = i - 1; j >= 0 && nums[j] > currentVal; j--) {
            nums[j + 1] = nums[j];
            nums[j] = currentVal;
        }
    }
    // Return nums
    return nums;
};

console.log(insertionSort([5, 4, 3, 2, 1]));
