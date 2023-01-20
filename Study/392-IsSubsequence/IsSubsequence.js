const isSubsequence = (strOne, strTwo) => {
    // Initialize two pointers. One for string one and one for string two
    let pointerOne = 0;
    let pointerTwo = 0;

    // Iterate through strTwo
    // If the element matches the char in strOne, increase strOne
    while (pointerTwo < strTwo.length) {
        if (strOne[pointerOne] === strTwo[pointerTwo]) {
            pointerOne++;
        }
        pointerTwo++;
    }

    return pointerOne === strOne.length;
};

console.log(isSubsequence('hell', 'hrreesnlssdslsds'));
