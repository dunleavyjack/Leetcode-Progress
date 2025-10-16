function halvesAreAlike(s: string): boolean {
    let vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let vowelsP1 = 0;
    let vowelsP2 = 0;

    for (let p1 = 0, p2 = s.length / 2; p1 < p2 && p2 < s.length; p1++, p2++) {
        if (vowels.includes(s[p1])) vowelsP1++;
        if (vowels.includes(s[p2])) vowelsP2++;
    }

    return vowelsP1 === vowelsP2;
}
