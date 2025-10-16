function destCity(paths: string[][]): string {
    let destinations = new Set<string>();
    let result = '';

    for (let path of paths) {
        destinations.add(path[0]);
    }

    for (let path of paths) {
        if (!destinations.has(path[1])) return path[1];
    }

    return result;
}
