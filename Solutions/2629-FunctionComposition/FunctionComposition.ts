type F = (x: number) => number;

function compose(functions: F[]): F {
    return function (x) {
        return functions.reduceRight((acc, fun) => fun(acc), x);
    };
}
