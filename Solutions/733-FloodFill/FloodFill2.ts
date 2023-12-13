function floodFill2(
    image: number[][],
    sr: number,
    sc: number,
    color: number
): number[][] {
    const fill = (sr: number, sc: number, startingColor: number): void => {
        if (
            sr < 0 ||
            sc < 0 ||
            sr >= image.length ||
            sc >= image[0].length ||
            image[sr][sc] !== startingColor
        )
            return;

        image[sr][sc] = color;
        fill(sr - 1, sc, startingColor);
        fill(sr + 1, sc, startingColor);
        fill(sr, sc - 1, startingColor);
        fill(sr, sc + 1, startingColor);
    };

    if (image[sr][sc] === color) return image;
    fill(sr, sc, image[sr][sc]);
    return image;
}
