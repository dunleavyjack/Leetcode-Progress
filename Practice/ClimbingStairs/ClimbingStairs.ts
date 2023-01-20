function climbStairs(n: number): number {
    let one: number = 1;
    let two: number = 1;

    for (let i: number = 0; i < n - 1; i++) {
        let temp: number = one;
        one = one + two;
        two = temp;
    }

    return one;
}
