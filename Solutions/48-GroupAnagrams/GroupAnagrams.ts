function groupAnagrams(strs: string[]): string[][] {
    let hashmap = new Map<string, string[]>(); /// [0,0,0,2,0,0,1,0...] to 26
    const a = 'a';

    for (let word of strs) {
        let count: number[] = new Array(26).fill(0);
        for (let i = 0; i < word.length; i++) {
            count[word.charCodeAt(i) - a.charCodeAt(0)] += 1;
        }

        hashmap.has(count.toString())
            ? hashmap.set(count.toString(), [
                  ...hashmap.get(count.toString())!,
                  word,
              ])
            : hashmap.set(count.toString(), [word]);
    }

    return Array.from(hashmap.values());
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
