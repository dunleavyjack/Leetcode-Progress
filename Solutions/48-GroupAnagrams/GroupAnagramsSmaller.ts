function groupAnagrams(strs: string[]): string[][] {
    let map = new Map<string, string[]>();
    let result: string[][] = [];
    let aCharCode = 'a'.charCodeAt(0);

    for (let str of strs) {
        let frequencyArr = new Array(26).fill(0);
        for (let letter of str)
            frequencyArr[letter.charCodeAt(0) - aCharCode] += 1;
        map.set(frequencyArr.toString(), [
            ...(map.get(frequencyArr.toString()) || []),
            str,
        ]);
    }

    for (let [_key, value] of map) result.push(value);

    return result;
}
