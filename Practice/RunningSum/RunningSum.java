class Solution {
    public int[] runningSum(int[] nums) {
        int runningTotal = 0;

        for(int i = 0; i < nums.length; i++){
            nums[i] = nums[i] + runningTotal;

            runningTotal += nums[i] - runningTotal;
        };

        return nums; 
    }
    
}