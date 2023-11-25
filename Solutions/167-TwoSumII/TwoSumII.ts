function twoSum(numbers: number[], target: number): number[] {
    const map = new Map<number, number>();

    for (let i = 0; i < numbers.length; i++) {
        if (map.has(target - numbers[i])) {
            return [map.get(target - numbers[i])! + 1, i + 1];
        } else {
            map.set(numbers[i], i);
        }
    }

    return [-1, -1];
}
