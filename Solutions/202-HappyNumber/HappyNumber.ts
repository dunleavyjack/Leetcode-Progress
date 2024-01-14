function isHappy(n: number): boolean {
    if (n === 1 || n === 7) return true;

    let num = n.toString().split('');
    if (num.length === 1) return false;

    const sumOfSquaredDigits = num.reduce(
        (acc, curr) => (acc += Number(curr) ** 2),
        0
    );
    if (sumOfSquaredDigits === 1) return true;

    return isHappy(Number(sumOfSquaredDigits));
}
