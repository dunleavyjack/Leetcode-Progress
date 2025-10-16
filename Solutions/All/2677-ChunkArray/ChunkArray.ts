function chunk(arr: any[], size: number): any[][] {
    let result: any[][] = [];
    let currentChunk: any[] = [];

    for (let element of arr) {
        if (currentChunk.length < size) currentChunk.push(element);
        else {
            result.push(currentChunk);
            currentChunk = [element];
        }
    }

    if (currentChunk.length) result.push(currentChunk);

    return result;
}
