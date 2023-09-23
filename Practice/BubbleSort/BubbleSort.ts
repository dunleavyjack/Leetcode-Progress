const bubbleSort = (nums: number[]): number[] => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }

    return nums;
};

console.log(bubbleSort([5, 4, 3, 2, 1]));
