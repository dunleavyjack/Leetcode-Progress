// function longestPalindrome(s: string): number {
//     // Initialize a hashmap to count frequency of characters in s
//     let frequencyCounter: any = {};
//     let palidromeLength: number = 0;
//     let extra: number = 0;

//     // Iterate through characters in s and track their frequency in the hashmap
//     for (let char of s) {
//         frequencyCounter[char]
//             ? (frequencyCounter[char] += 1)
//             : (frequencyCounter[char] = 1);
//     }

//     // Check for pairs in the frequency counter
//     for (let val in frequencyCounter) {
//         // Count pairs
//         const pairs: number = Math.floor(frequencyCounter[val] / 2);
//         palidromeLength += pairs * 2;

//         // Check for odd numbered pairs
//         if (frequencyCounter[val] % 2 > 0) extra++;
//     }

//     // One letter can be in the center of the palidrome, so check and add one
//     return extra >= 1 ? palidromeLength + 1 : palidromeLength;
// }

// console.log(longestPalindrome(''));

type FrequencyCounter = {
    [key: number]: number;
};

function containsDuplicate(nums: number[]): boolean {
    // Initialize a hashmap to track frequency of numbes in nums
    let frequencyCounter: FrequencyCounter = {};

    for (let number of nums) {
        frequencyCounter[number]
            ? (frequencyCounter[number] += 1)
            : (frequencyCounter[number] = 1);
        if (frequencyCounter[number] === 2) return true;
    }

    console.log(frequencyCounter);
    return false;
}

console.log(containsDuplicate([10, 20, 30]));
