import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        ArrayList<Integer> numsOneDifference = new ArrayList<>();
        ArrayList<Integer> numsTwoDifference = new ArrayList<>();

        Set<Integer> distintIntsOne = new HashSet<>();
        Set<Integer> distintIntsTwo = new HashSet<>();

        for (int num : nums1)
            distintIntsOne.add(num);
        for (int num : nums2)
            distintIntsTwo.add(num);

        for (Integer value : distintIntsOne) {
            if (!distintIntsTwo.contains(value)) {
                numsOneDifference.add(value);
            }
        }

        for (Integer value : distintIntsTwo) {
            if (!distintIntsOne.contains(value)) {
                numsTwoDifference.add(value);
            }
        }

        List<List<Integer>> result = new ArrayList<>();
        result.add(numsOneDifference);
        result.add(numsTwoDifference);

        return result;
    }
}