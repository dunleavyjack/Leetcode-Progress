function frequencySort(s: string): string {
    const map = new Map<string, number>();
    const freqArray = Array(s.length + 1).fill([]);
    let result = '';

    for (const letter of s) map.set(letter, (map.get(letter) || 0) + 1);

    for (const [letter, freq] of map)
        freqArray[freq] = [...freqArray[freq], letter];

    for (let i = freqArray.length - 1; i >= 0; i--) {
        if (!freqArray[i].length) continue;
        else {
            freqArray[i].forEach((letter) => {
                result += letter.repeat(i);
            });
        }
    }

    return result;
}
