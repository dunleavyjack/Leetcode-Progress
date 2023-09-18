function twoSum(numbers: number[], target: number): number[] {
    let map = new Map<number, number>(); // {compliment of current number, index of current num}
    // { target - number, index of number }

    let result: number[] = [];

    for (let i = 0; i < numbers.length; i++) {
        if (map.has(numbers[i])) {
            result = [map.get(numbers[i])! + 1, i + 1];
            break;
        } else map.set(target - numbers[i], i);
    }

    return result;
}
