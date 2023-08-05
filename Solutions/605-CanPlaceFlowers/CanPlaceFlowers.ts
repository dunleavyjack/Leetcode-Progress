function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let flowersPlanted = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] !== 1 &&
            (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
            (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
        ) {
            flowerbed[i] = 1;
            flowersPlanted++;
        }
    }

    return n <= flowersPlanted;
}
