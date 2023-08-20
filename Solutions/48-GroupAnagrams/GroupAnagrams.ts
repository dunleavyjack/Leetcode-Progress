export function groupAnagrams(strs: string[]): string[][] {
    const hashMap = new Map<number[], string[]>();
    const aCharCode = 'a'.charCodeAt(0);
    let result: string[][] = [];

    for (let s of strs) {
        let count: number[] = new Array(26).fill(0);
        for (let letter of s) {
            count[letter.charCodeAt(0) - aCharCode] += 1;
        }

        if (hashMap.has(count)) {
            const curr = hashMap.get(count) as string[];
            hashMap.set(count, [...curr, s]);
        } else {
            hashMap.set(count, [s]);
        }
    }

    for (const [_key, value] of hashMap) {
        result.push(value);
    }

    return result;
}
