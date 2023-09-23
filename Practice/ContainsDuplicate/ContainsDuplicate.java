import java.util.HashSet;
import java.util.Set;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> uniqueNums = new HashSet<>();

        for (int num : nums) {
            if (!uniqueNums.add(num)) {
                return true;
            }
        }

        return false;
    }
}
