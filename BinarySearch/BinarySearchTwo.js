const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (left + right) / 2);

        if (target === nums[mid]) {
            return mid;
        }

        if (target > nums[mid]) {
            let left = mid + 1;
        } else {
            let right = mid - 1;
        }
    }

    return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 2;

search(nums, target);
