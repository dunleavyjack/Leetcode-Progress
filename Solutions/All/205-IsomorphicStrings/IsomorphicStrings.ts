export {};

function isIsomorphic(s: string, t: string): boolean {
    let sToT = new Map<string, string>();
    let tToS = new Map<string, string>();

    // Sanity check
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (
            // s has already been mapped and doesn't equal the same character as t
            // or: t has already been mapped and doesn't equal the same character as s
            (sToT.has(s[i]) && sToT.get(s[i]) !== t[i]) ||
            (tToS.has(t[i]) && tToS.get(t[i]) !== s[i])
        )
            return false;
        else {
            // Map s and t, t to s
            sToT.set(s[i], t[i]);
            tToS.set(t[i], s[i]);
        }
    }

    return true;
}
