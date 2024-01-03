function numberOfBeams(bank: string[]): number {
    let totalPerRow: number[] = [];
    let beams = 0;

    for (let row of bank) {
        let total = 0;
        for (let beam of row) {
            if (beam === '1') total++;
        }
        if (total) totalPerRow.push(total);
    }

    for (let i = 1; i < totalPerRow.length; i++) {
        beams += totalPerRow[i] * totalPerRow[i - 1];
    }

    return beams;
}
