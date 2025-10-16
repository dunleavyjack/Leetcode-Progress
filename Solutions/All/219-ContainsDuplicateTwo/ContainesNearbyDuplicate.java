import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        Map<Integer, ArrayList<Integer>> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                ArrayList<Integer> potentialIndexes = map.get(nums[i]);
                for (int index : potentialIndexes) {
                    if (Math.abs(index - i) <= k) {
                        return true;
                    }
                }
                map.get(nums[i]).add(i);
            } else {
                map.put(nums[i], new ArrayList<>(Arrays.asList(i)));
            }
        }

        return false;
    }
}