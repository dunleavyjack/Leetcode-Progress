function sameFrequency(numOne, numTwo) {
    // Convert to string
    const numOneStr = String(numOne);
    const numTwoStr = String(numTwo);

    // Initialize two freq counters
    let counterOne = {};
    let counterTwo = {};

    // Count frequency in num 1
    for (let num in numOneStr) {
        counterOne[numOneStr[num]]
            ? (counterOne[numOneStr[num]] += 1)
            : (counterOne[numOneStr[num]] = 1);
    }

    // Count frequency in num 2
    for (let num in numTwoStr) {
        counterTwo[numTwoStr[num]]
            ? (counterTwo[numTwoStr[num]] += 1)
            : (counterTwo[numTwoStr[num]] = 1);
    }

    // Iterate through counterOne and check the counters match
    for (let val in counterOne) {
        if (counterOne[val] !== counterTwo[val]) return false;
        return true;
    }
}

console.log(sameFrequency(123, 132));
