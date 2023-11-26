import java.util.HashSet;
import java.util.Set;

class Solution {
    public int partitionString(String s) {
        Set<Character> set = new HashSet<Character>();
        int result = 0;

        for (int i = 0; i < s.length(); i++) {
            if (set.contains(s.charAt(i))) {
                result++;
                set = new HashSet<Character>();
                set.add(s.charAt(i));
            } else {
                set.add(s.charAt(i));
            }
        }

        if (set.size() > 0)
            result++;

        return result;
    }
}