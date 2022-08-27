const longestCommonPrefix = (strs: string[]): string => {
    // Initialize an initial match
    let initialMatch = strs[0];
    let end = initialMatch.length - 1;

    // Iterate through the list to find similar vfalues
    for (let i: number = 0; i < strs.length; i++) {
        console.log(strs[i]);
    }

    console.log('this is the initial match length', end);
    return initialMatch;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
