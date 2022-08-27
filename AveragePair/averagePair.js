const averagePair = (nums, target) => {
    // Initialize two pointers
    let left = 0;
    let right = nums.length - 1;

    // Iterate through the nums arr
    while (left < right) {
        let avg = (nums[left] + nums[right]) / 2;
        console.log(avg);
        if (avg === target) return true;

        // Make the avg smaller
        if (avg > target) right--;
        //Make the average larger
        else left++;
    }

    return false;
};

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
