function largestAltitude(gain: number[]): number {
    let max = 0;
    let left = 0;
    let right = 1;

    while (right < gain.length) {
        gain[right] += gain[left];
        right++;
        left++;
    }

    for (let num of gain) max = Math.max(num, max);

    return max;
}
