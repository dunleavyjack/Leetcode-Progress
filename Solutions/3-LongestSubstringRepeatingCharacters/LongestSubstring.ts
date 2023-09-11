function lengthOfLongestSubstring(s: string): number {
    let map = new Map<string, number>(); // letter, index
    let max = 0,
        left = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right])! >= left) {
            left = map.get(s[right])! + 1;
        }

        max = Math.max(max, right - left + 1);

        map.set(s[right], right); // New right
    }

    return max;
}
