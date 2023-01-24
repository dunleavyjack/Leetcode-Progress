function removeDuplicates(nums: number[]): number {
    // Initalize two pointers
    let pointerOne: number = 0;
    let pointerTwo: number = 1;

    // Iterate through nums array and compare value of pointer one and two
    while (pointerTwo < nums.length) {
        if (nums[pointerOne] === nums[pointerTwo]) {
            nums.splice(pointerOne, 1);
            // If element is removed, decrease pointers by one
            pointerOne--;
            pointerTwo--;
        }
        // Increase pointers
        pointerOne++;
        pointerTwo++;
    }

    return nums.length;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3]));
