import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;

class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer, Integer> freqCounter = new HashMap<Integer, Integer>();
        ArrayList<Integer> resultList = new ArrayList<>();

        for (int num : nums1) {
            if (freqCounter.containsKey(num)) {
                freqCounter.put(num, freqCounter.get(num) + 1);
            } else {
                freqCounter.put(num, 1);
            }
        }

        for (int num : nums2) {
            if (freqCounter.containsKey(num)) {
                resultList.add(num);

                if (freqCounter.get(num) == 1) {
                    freqCounter.remove(num);
                } else {
                    freqCounter.put(num, freqCounter.get(num) - 1);
                }
            }
        }

        int[] result = new int[resultList.size()];
        for (int i = 0; i < resultList.size(); i++) {
            result[i] = resultList.get(i);
        }

        return result;

    }
}