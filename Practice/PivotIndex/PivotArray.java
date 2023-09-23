package PivotIndex;

public class PivotArray {
    public int pivotIndex(int[] nums) {
        // Find total sum of the array
        int totalSum = 0;
        for (int i = 0; i < nums.length; i++) {
            totalSum += nums[i];
        }

        // Split array starting at 0
        int leftSum = 0;
        int rightSum = totalSum;

        // Iterate through array again sliding pivot index up and comparing both sides
        for (int i = 0; i < nums.length; i++) {
            int potentialPivotIndexValue = nums[i];
            if (leftSum == rightSum - potentialPivotIndexValue) {
                return i;
            } else {
                leftSum += nums[i];
                rightSum -= nums[i];
            }
        }

        return -1;
    }
}
