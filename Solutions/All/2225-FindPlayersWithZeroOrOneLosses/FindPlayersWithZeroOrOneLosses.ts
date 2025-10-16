type Player = {
    w: number;
    l: number;
};

function findWinners(matches: number[][]): number[][] {
    const map = new Map<number, Player>();

    for (let match of matches) {
        // Winner
        if (map.has(match[0])) {
            map.set(match[0], {
                ...map.get(match[0])!,
                w: map.get(match[0])!.w + 1,
            });
        } else {
            map.set(match[0], { w: 1, l: 0 });
        }

        // Loser
        if (map.has(match[1])) {
            map.set(match[1], {
                ...map.get(match[1])!,
                l: map.get(match[1])!.l + 1,
            });
        } else {
            map.set(match[1], { w: 0, l: 1 });
        }
    }

    const onlyWinners: number[] = [];
    const singleLosers: number[] = [];

    for (const [key, value] of map) {
        if (value.l === 0) {
            onlyWinners.push(key);
        } else if (value.l === 1) {
            singleLosers.push(key);
        }
    }

    return [
        [...onlyWinners.sort((a, b) => a - b)],
        [...singleLosers.sort((a, b) => a - b)],
    ];
}
