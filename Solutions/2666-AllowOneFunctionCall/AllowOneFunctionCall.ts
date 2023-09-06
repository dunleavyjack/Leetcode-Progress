export type Fn = (...args: any[]) => any;

function once(fn: Fn): Fn {
    let calls = -1; // First iteration will set to 0.
    return function (...args) {
        calls++;
        return !calls ? fn(...args) : undefined;
    };
}
