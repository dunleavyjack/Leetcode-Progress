export {};

const bubbleSort = (nums: number[]): number[] => {
    let noSwaps: boolean; // Boolean to track if a swap occured (to quickly exit the loop);
    for (let i = nums.length - 1; i >= 0; i--) {
        noSwaps = true; // Reset noSwaps for each iteration
        for (let j = 0; j < i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
                noSwaps = false; // Since a swap occured, set to false.
            }
        }
        if (noSwaps) break; // If there was no swaps, break from the loop;
    }
    return nums;
};

console.log(bubbleSort([5, 4, 3, 2, 1]));
