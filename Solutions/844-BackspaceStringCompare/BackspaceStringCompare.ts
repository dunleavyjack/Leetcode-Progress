function backspaceCompare(s: string, t: string): boolean {
    let sResult: string[] = [];
    let tResult: string[] = [];

    console.log('hi');

    for (let sPointer = s.length - 1; sPointer >= 0; sPointer--) {
        console.log('hoooo');
        if (s[sPointer] === '#') sPointer--;
        else sResult.push(s[sPointer]);
    }

    for (let tPointer = t.length - 1; tPointer >= 0; tPointer--) {
        if (t[tPointer] === '#') tPointer--;
        else tResult.push(t[tPointer]);
    }

    console.log(sResult, tResult);
    if (sResult.length !== tResult.length) return false;

    for (let i = 0; i < sResult.length; i++) {
        if (sResult[i] !== tResult[i]) return false;
    }

    return true;
}

console.log(backspaceCompare('ab#cff', 'ad#c'));
