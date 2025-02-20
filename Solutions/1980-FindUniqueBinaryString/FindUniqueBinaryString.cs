public class Solution
{
    public string FindDifferentBinaryString(string[] nums)
    {
        string newNum = "";

        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i][i] == '1')
            {
                newNum += '0';
            }
            else
            {
                newNum += '1';
            }
        }

        return newNum;
    }
}
