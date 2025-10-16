class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int mid = Math.floorDiv(right + left, 2);

        while (left <= right) {
            if (target == nums[mid])
                return mid;

            if (target > nums[mid])
                left = mid + 1;
            else
                right = mid - 1;

            mid = Math.floorDiv(right + left, 2);
        }
        return -1;
    }
}