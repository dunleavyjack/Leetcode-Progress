function uniqueOccurrences(arr: number[]): boolean {
    // Init an empty hash map.
    let freqCounter = new Map<number, number>(); // { num: freq }
    let uniqueFrequencies = new Set<number>();

    // Do a frequency count for each element in the array.
    for (let num of arr) freqCounter.set(num, (freqCounter.get(num) || 0) + 1);

    // Add values from the hashmap
    for (let [_num, freq] of freqCounter) {
        if (uniqueFrequencies.has(freq)) return false;
        else uniqueFrequencies.add(freq);
    }

    return true;
}
