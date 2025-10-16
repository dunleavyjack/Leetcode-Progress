function maxScore(s: string): number {
    let rightOnes = 0;
    let leftZeros = 0;
    let score = 0;

    for (let letter of s) if (letter === '1') rightOnes++;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') leftZeros++;
        else rightOnes--;

        score = Math.max(score, leftZeros + rightOnes);
    }

    return score;
}
