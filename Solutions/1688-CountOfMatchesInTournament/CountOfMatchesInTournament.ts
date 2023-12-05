function numberOfMatches(n: number): number {
    let teams = n;
    let matches = 0;

    let match = (teams, matches) => {
        if (teams < 2) return matches;

        if (teams % 2 === 0) {
            matches += teams / 2;
            teams /= 2;
        } else if (teams % 2 !== 0) {
            matches += (teams - 1) / 2;
            teams = (teams - 1) / 2 + 1;
        }

        console.log(teams);
        return match(teams, matches);
    };

    return match(teams, matches);
}
