// Input: (image = [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 1],
// ]),
//     (sr = 1),
//     (sc = 1),
//     (color = 2);
// Output: [
//     [2, 2, 2],
//     [2, 2, 0],
//     [2, 0, 1],
// ];

const image = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
];
const sr = 1;
const sc = 1;
const color = 2;

const floodFill = (image, sr, sc, color) => {
    if (image[sr][sc] === color) return image;
    fill(image, sr, sc, image[sr][sc], color);
    return image;
};

const fill = (image, sr, sc, initialColor, color) => {
    if (
        sr < 0 ||
        sc < 0 ||
        sr >= image.length ||
        sc >= image[0].length ||
        image[sr][sc] !== initialColor
    )
        return;

    image[sr][sc] = color;
    fill(image, sr + 1, sc, initialColor, color);
    fill(image, sr - 1, sc, initialColor, color);
    fill(image, sr, sc + 1, initialColor, color);
    fill(image, sr, sc - 1, initialColor, color);
};

console.log(floodFill(image, sr, sc, color));
