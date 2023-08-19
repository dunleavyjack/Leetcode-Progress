function uniqueOccurrences(arr: number[]): boolean {
    // Init an empty hash map.
    let freqCounter = new Map<number, number>();
    let uniqueOccurrences = new Set<number>();

    // Do a frequency count for each element in the array.
    for (let a of arr) {
        if (freqCounter.has(a)) freqCounter.set(a, freqCounter.get(a)! + 1);
        else freqCounter.set(a, 1);
    }

    // Add values from the hashmap
    for (let [_key, value] of freqCounter) {
        if (uniqueOccurrences.has(value)) return false;
        else uniqueOccurrences.add(value);
    }

    return true;
}
