export {};

const linearSearch = (nums: number[], target: number): number => {
    // Iterate through the array. If the element matches target return the index
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) return i;
    }

    // If target is not in array return -1
    return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
