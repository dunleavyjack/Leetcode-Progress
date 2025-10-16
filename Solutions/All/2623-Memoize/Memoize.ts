type Fn = (...params: any) => any;

function memoize(fn) {
    const cache = [];
    return function (...args) {
        const key = args.join('-');
        if (key in cache) return cache[key];
        else {
            cache[key] = Number(fn(...args));
            return cache[key];
        }
    };
}
