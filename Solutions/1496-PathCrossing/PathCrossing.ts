function isPathCrossing(path: string): boolean {
    let pointsVisited = new Set(['0,0']);
    let currentPoint = [0, 0];

    for (let char of path) {
        if (char === 'N') currentPoint = [currentPoint[0], currentPoint[1] + 1];
        else if (char === 'S')
            currentPoint = [currentPoint[0], currentPoint[1] - 1];
        else if (char === 'W')
            currentPoint = [currentPoint[0] + 1, currentPoint[1]];
        else if (char === 'E')
            currentPoint = [currentPoint[0] - 1, currentPoint[1]];

        if (pointsVisited.has(currentPoint.toString())) return true;
        else pointsVisited.add(currentPoint.toString());
    }

    return false;
}
