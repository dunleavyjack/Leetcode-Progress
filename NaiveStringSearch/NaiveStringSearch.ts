const stringSearch = (long: string, short: string) => {
    let matches: number = 0;

    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (long[i + j] !== short[j]) break;
            if (j === short.length - 1) matches++;
        }
    }

    return matches;
};

console.log(stringSearch('ok hello hello ok hello', 'hello'));
