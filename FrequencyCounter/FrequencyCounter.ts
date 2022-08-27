const frequencyCounter = (numOne: number, numTwo: number) => {
    const numOneStr: string = String(numOne);
    const numTwoStr: string = String(numTwo);

    let counterOne = {};
    let counterTwo = {};

    for (let num of numOneStr) {
        counterOne[numOneStr[num]]
            ? (counterOne[numOneStr[num]] += 1)
            : (counterOne[numOneStr[num]] = 1);
    }

    for (let num of numTwoStr) {
        counterTwo[numTwoStr[num]]
            ? (counterTwo[numTwoStr[num]] += 1)
            : (counterTwo[numTwoStr[num]] = 1);
    }

    for (let val in counterOne) {
        if (counterOne[val] !== counterTwo[val]) return false;
        return true;
    }
};
