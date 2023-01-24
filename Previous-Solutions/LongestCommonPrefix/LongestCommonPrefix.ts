const longestCommonPrefix = (strs: string[]): string => {
    // Use the reduce method to iterate through all strings in strs array
    return strs.reduce((prev: string, next: string) => {
        // Initialize a counter, starting at 0, to track common prefix
        let i: number = 0;

        // If letters match for both strings, increase counter
        while (prev[i] && next[i] && prev[i] === next[i]) {
            i++;
        }
        // Return the current longest common prefix
        return prev.slice(0, i);
    });
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
