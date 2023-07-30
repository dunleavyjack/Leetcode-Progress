import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> uniqueNums = new HashSet<Integer>();

        for (int num : nums) {
            if (!uniqueNums.contains(num)) {
                uniqueNums.add(num);
            } else {
                return true;
            }
        }

        return false;
    }
}
