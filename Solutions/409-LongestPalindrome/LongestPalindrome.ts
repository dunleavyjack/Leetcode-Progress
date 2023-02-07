const longestPalindrome = (s: string): number => {
    let anagramLength: number = 0;

    let lengthFromMiddle = (
        subString: string,
        leftPointer: number,
        rightPointer: number
    ) => {
        while (leftPointer > 0 && rightPointer <= subString.length) {
            if (subString[leftPointer] === subString[rightPointer]) {
                leftPointer++;
                rightPointer++;
            }
        }
    };

    return anagramLength;
};

// function longestPalindrome(s: string): number {

//     const anagramLengthFromMiddle = (
//         s: string,
//         leftPointer: number,
//         rightPointer: number
//     ): number => {
//         if (
//             leftPointer >= 0 &&
//             rightPointer < s.length &&
//             leftPointer[s] == rightPointer[s]
//         ) {
//             leftPointer--;
//             rightPointer++;
//         }

//         return rightPointer - leftPointer + 1;
//     };
// }

console.log(longestPalindrome('racecar'));
console.log(longestPalindrome('aabb'));
