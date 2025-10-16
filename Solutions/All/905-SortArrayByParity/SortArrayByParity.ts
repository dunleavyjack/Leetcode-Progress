function sortArrayByParity(nums: number[]): number[] {
    let even: number[] = [];
    let odd: number[] = [];

    for (let num of nums) {
        if (num % 2 === 0) even.push(num);
        else odd.push(num);
    }

    return [...even, ...odd];
}
