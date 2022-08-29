const longestCommonPrefix = (strs: string[]): string => {
    // Find smallest string in strings
    let max = Infinity;
    for (let str of strs) {
        max = Math.min(max, str.length);
    }
    console.log(max);

    return '';
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
