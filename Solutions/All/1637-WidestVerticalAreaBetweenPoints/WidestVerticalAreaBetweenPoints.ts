function maxWidthOfVerticalArea(points: number[][]): number {
    let xPoints: number[] = [];
    let maxWidth: number = 0;

    for (let point of points) xPoints.push(point[0]);

    const sortedXPoints = xPoints.sort((a, b) => a - b);

    for (let i = 0; i < sortedXPoints.length - 1; i++) {
        maxWidth = Math.max(maxWidth, sortedXPoints[i + 1] - sortedXPoints[i]);
    }

    return maxWidth;
}
