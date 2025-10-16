function isIsomorphic(s: string, t: string): boolean {
    let sToT = new Map<string, string>();
    let tToS = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        if (
            (sToT.has(s[i]) && sToT.get(s[i])! !== t[i]) ||
            (tToS.has(t[i]) && tToS.get(t[i])! !== s[i])
        ) {
            return false;
        } else {
            sToT.set(s[i], t[i]);
            tToS.set(t[i], s[i]);
        }
    }

    return true;
}

console.log(isIsomorphic('egg', 'ass'));
