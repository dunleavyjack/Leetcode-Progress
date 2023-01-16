// Slow O(n^2) Approach
// const twoSum = (nums: number[], target: number): number[] => {
//     let result: number[] = [];

//     for (let i: number = 0; i < nums.length; i++) {
//         for (let j: number = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 result = [i, j];
//             }
//         }
//     }
//     return result;
// };

// console.log(twoSum([2, 11, 15, 7], 9));

// Faster 0(n) Approach
function twoSum(nums: number[], target: number): number[] {
    let hashMap: Map<number, number> = new Map();
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];

        if (hashMap.get(compliment)) {
            result = [hashMap.get(compliment)!, i];
        }

        hashMap.set(compliment, i);
    }

    console.log(hashMap);
    return result;
}

console.log(twoSum([2, 11, 15, 7], 9));
