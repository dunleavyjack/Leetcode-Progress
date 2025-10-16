function minSteps(s: string, t: string): number {
    const sFreq = new Map<string, number>(); // { letter: frequency of that letter }
    const tFreq = new Map<string, number>();

    let steps = 0;

    for (let i = 0; i < s.length; i++) {
        sFreq.set(s[i], (sFreq.get(s[i]) || 0) + 1);
        tFreq.set(t[i], (tFreq.get(t[i]) || 0) + 1);
    }

    for (const [letter, freq] of sFreq) {
        if ((tFreq.get(letter) || 0) < freq) {
            steps += freq - (tFreq.get(letter) || 0);
        }
    }

    return steps;
}
