function maxLengthBetweenEqualCharacters(s: string): number {
    let max = -1;
    let map = new Map<string, number[]>();

    for (let i = 0; i < s.length; i++) {
        map.set(s[i], [...(map.get(s[i]) || []), i]);
    }

    for (const [letter, indexArr] of map) {
        if (indexArr.length < 2) continue;

        max = Math.max(max, indexArr[indexArr.length - 1] - indexArr[0] - 1);
    }

    return max;
}
