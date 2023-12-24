function minOperations(s: string): number {
    let zeroFirst = 0;
    let oneFirst = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) s[i] === '1' ? zeroFirst++ : oneFirst++;
        else s[i] === '1' ? oneFirst++ : zeroFirst++;
    }

    return Math.min(Math.min(zeroFirst, oneFirst));
}
