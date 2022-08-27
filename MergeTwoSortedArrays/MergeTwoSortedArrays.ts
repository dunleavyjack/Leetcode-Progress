export {}; // Added to change scope (allows reuse of variable names)

const arrOne: number[] = [1, 6, 7, 9];
const arrTwo: number[] = [2, 4, 8, 10, 11];

const merge = (arrOne: number[], arrTwo: number[]): number[] => {
    // Initialize a result array
    let result: any[] = [];

    // Iterate through array one comparing each value with array two and pushing lowest to result array
    while (arrOne.length) {
        arrOne[0] < arrTwo[0]
            ? result.push(arrOne.shift())
            : result.push(arrTwo.shift());
    }

    // Check for remaining elements in both arrays
    if (arrOne.length) result = result.concat(arrOne);
    if (arrTwo.length) result = result.concat(arrTwo);

    // Return result array
    return result;
};

console.log(merge(arrOne, arrTwo));
