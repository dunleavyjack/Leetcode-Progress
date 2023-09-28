function addDigits(num: number): number {
    if (String(num).length === 1) return num;
    else {
        let sum = 0;
        for (let n of String(num).split('')) sum += Number(n);
        return addDigits(sum);
    }
}
