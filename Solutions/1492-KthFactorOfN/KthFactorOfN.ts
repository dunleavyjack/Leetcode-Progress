function kthFactor(n: number, k: number): number {
    let currentFactor = 1;

    while (currentFactor <= n) {
        if (n % currentFactor === 0) {
            k--;
            if (k === 0) {
                return currentFactor;
            }
        }

        currentFactor++;
    }

    return -1;
}
