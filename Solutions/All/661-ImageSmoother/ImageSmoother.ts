function imageSmoother(img: number[][]): number[][] {
    const result = new Array(img.length);

    for (let i = 0; i < img.length; i++) {
        result[i] = new Array(img[0].length);
    }

    const getAvg = (i, j) => {
        let cells = 1;
        let avg = img[i][j];

        if (Number.isInteger(img[i - 1]?.[j])) {
            cells++;
            avg += img[i - 1][j];
        }

        if (Number.isInteger(img[i + 1]?.[j])) {
            cells++;
            avg += img[i + 1][j];
        }

        if (Number.isInteger(img[i + 1]?.[j + 1])) {
            cells++;
            avg += img[i + 1][j + 1];
        }

        if (Number.isInteger(img[i - 1]?.[j - 1])) {
            cells++;
            avg += img[i - 1][j - 1];
        }

        if (Number.isInteger(img[i + 1]?.[j - 1])) {
            cells++;
            avg += img[i + 1][j - 1];
        }

        if (Number.isInteger(img[i - 1]?.[j + 1])) {
            cells++;
            avg += img[i - 1][j + 1];
        }

        if (Number.isInteger(img[i]?.[j + 1])) {
            cells++;
            avg += img[i][j + 1];
        }

        if (Number.isInteger(img[i]?.[j - 1])) {
            cells++;
            avg += img[i][j - 1];
        }

        return Math.floor(avg / cells);
    };

    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[0].length; j++) {
            const avg = getAvg(i, j);
            result[i][j] = avg;
        }
    }

    return result;
}
