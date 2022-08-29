// Return the correct index of the item with with minimal calls
export {};

const search = (nums: number[], target: number): number => {
    let start: number = 0;
    let end: number = nums.length - 1;
    let mid: number = Math.floor((start + end) / 2);

    while (nums[mid] !== target && start <= end) {
        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return nums[mid] === target ? mid : -1;
};

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
