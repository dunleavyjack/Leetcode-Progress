function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    color: number
): number[][] {
    if (image[sr][sc] === color) return image;
    fill(image, sr, sc, image[sr][sc], color);
    return image;
}

const fill = (
    image: number[][],
    sr: number,
    sc: number,
    startingColor: number,
    color: number
): void => {
    if (
        sr < 0 ||
        sc < 0 ||
        sr >= image.length ||
        sc >= image[0].length ||
        image[sr][sc] !== startingColor
    )
        return;

    image[sr][sc] = color;
    fill(image, sr - 1, sc, startingColor, color);
    fill(image, sr + 1, sc, startingColor, color);
    fill(image, sr, sc - 1, startingColor, color);
    fill(image, sr, sc + 1, startingColor, color);
};
