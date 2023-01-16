function lengthOfLongestSubstring(s: string): number {
    let stack: string[] = [];
    let left: number = 0;
    let right: number = 0;
    let cu;

    for (let i = 0; i < s.length; i++) {
        if (stack.includes(s[i])) {
            console.log(stack);
            stack = [];
        } else {
            stack.push(s[i]);
        }
    }

    while (right < s.length) {}

    return stack.length;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
