class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length())
            return false;

        int[] sCount = new int[26];

        for (char c : s.toCharArray()) {
            sCount[c - 'a']++;
        }

        for (char c : t.toCharArray()) {
            if (sCount[c - 'a'] == 0)
                return false;
            sCount[c - 'a']--;
        }

        return true;
    }
}