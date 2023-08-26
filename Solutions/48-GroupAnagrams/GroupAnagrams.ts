function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, string[]>();
    let result: string[][] = [];
    let aCharCode = 'a'.charCodeAt(0);

    for (let word of strs) {
        let bucket = new Array(26).fill(0);
        for (let letter of word) {
            bucket[letter.charCodeAt(0) - aCharCode] += 1;
        }
        map.set(bucket.toString(), [
            ...(map.get(bucket.toString()) || []),
            word,
        ]);
    }

    for (const [_key, value] of map) result.push(value);

    return result;
}
