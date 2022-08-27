// Create function to mrege two sorted arrays
const merge = (arrOne, arrTwo) => {
    // Initialize result array
    let result = [];

    // Loop through array one and compare values with array 2, swapping smaller/larger values
    while (arrOne.length) {
        arrOne[0] < arrTwo[0]
            ? result.push(arrOne.shift())
            : result.push(arrTwo.shift());
    }

    // Check for extra values
    if (arrOne.length) result = result.concat(arrOne);
    if (arrTwo.length) result = result.concat(arrTwo);

    // Return the result array
    return result;
};

const arr = [9, 4, 6, 1];

const a = [5, 6, 7];
const b = [1, 10, 99];

console.log(merge(a, b));
