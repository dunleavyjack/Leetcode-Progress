import java.util.HashMap;
import java.util.Map;

class Solution {
    public int numIdenticalPairs(int[] nums) {
        int numOfGoodPairs = 0;
        Map<Integer, Integer> freqCounter = new HashMap<>();

        for (int num : nums) {
            if (freqCounter.containsKey(num)) {
                freqCounter.put(num, freqCounter.get(num) + 1);
            } else {
                freqCounter.put(num, 1);
            }
        }

        for (Map.Entry<Integer, Integer> entry : freqCounter.entrySet()) {
            if (entry.getValue() > 1) {
                numOfGoodPairs += entry.getValue() * (entry.getValue() - 1) / 2;
            }
        }

        return numOfGoodPairs;
    }
}