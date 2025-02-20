public class Solution
{
    public bool SearchMatrix(int[][] matrix, int target)
    {
        foreach (int[] row in matrix)
        {
            if (target > row[row.Length - 1])
                continue;

            return BinarySearch(row, target);
        }

        return false;
    }

    public bool BinarySearch(int[] nums, int target)
    {
        int left = 0;
        int right = nums.Length - 1;

        while (left <= right)
        {
            int mid = (int)Math.Floor((left + right) / 2.0);
            if (target == nums[mid])
            {
                return true;
            }
            else if (target < nums[mid])
            {
                right = mid - 1;
            }
            else
            {
                left = mid + 1;
            }
        }

        return false;
    }
}
