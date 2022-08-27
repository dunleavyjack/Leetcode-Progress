const merge = (arrOne, arrTwo) => {
    // Initalize an empty array that will hold the result
    let result = [];

    // Iterate through array one
    while (arrOne.length && arrTwo.length) {
        // Compare each index of array one with array two, adding largest smalles to the result
        arrOne[0] < arrTwo[0]
            ? result.push(arrOne.shift())
            : result.push(arrTwo.shift());
    }

    // Once one array is empty, add remainder of left over array to result
    if (arrOne.length) result = result.concat(arrOne);
    if (arrTwo.length) result = result.concat(arrTwo);

    return result;
};

const arrTwo = [2, 14, 99, 100];
const arrOne = [1, 10, 50];

console.log(merge(arrOne, arrTwo));
