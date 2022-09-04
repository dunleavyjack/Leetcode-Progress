function removeElement(nums: number[], val: number): number {
    // Inerate through the array
    for (let i: number = 0; i <= nums.length; i++) {
        // Look for a match
        if (nums[i] === val) {
            nums.splice(i, 1);
            // Decrement length to match new array length
            i--;
        }
    }

    // Return the length of the new nums arr
    return nums.length;
}

console.log(removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3], 2));
