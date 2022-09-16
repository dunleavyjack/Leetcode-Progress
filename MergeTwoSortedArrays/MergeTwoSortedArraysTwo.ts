export {};

const mergeSortedArrays = (arrOne: number[], arrTwo: number[]): number[] => {
    let result: any[] = [];

    while (arrOne.length && arrTwo.length) {
        arrOne[0] < arrTwo[0]
            ? result.push(arrOne.shift())
            : result.push(arrTwo.shift());
    }

    if (arrOne.length) result = result.concat(arrOne);
    if (arrTwo.length) result = result.concat(arrTwo);

    return result;
};

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6, 8, 9]));
