export {};

type FrequencyCounter = {
    [key: string]: number;
};

function majorityElement(nums: number[]): number {
    // Initialize and empty hashmap to count frequency of numbers in nums array
    let frequencyCounter: FrequencyCounter = {};
    let majority = -1;

    // Iterate through hashmap to count frequency of the numbers in nums array
    for (let num of nums) {
        frequencyCounter[num]
            ? (frequencyCounter[num] += 1)
            : (frequencyCounter[num] = 1);
        if (frequencyCounter[num] >= nums.length / 2) return num;
    }

    // Iterate through the hashmap, checking if a number has a value higher than n / 2
    return majority;
}

console.log(majorityElement([3, 2, 3]));
