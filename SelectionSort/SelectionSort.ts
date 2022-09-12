export {};

const selectionSort = (nums: number[]): number[] => {
    // Outer loop
    for (let i = 0; i < nums.length; i++) {
        // Set a minimum value as first in outer loop
        let min = i;

        // Inner loop to compare each each element against min, resetting min if element is lower
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < nums[min]) min = j;
        }

        // At end of inner loop, swap first value and min, so min is at begining of inner loop
        let temp = nums[min];
        nums[min] = nums[i];
        nums[i] = temp;
    }

    return nums;
};

console.log(selectionSort([5, 4, 3, 2, 1]));
