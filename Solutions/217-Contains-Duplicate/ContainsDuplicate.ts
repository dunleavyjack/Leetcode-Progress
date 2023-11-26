function containsDuplicate(nums: number[]): boolean {
    // 1. Create a 'Set' (a list of unique values)
    let set = new Set<number>();

    //. 2. Iterate through the each `num` in `nums`:
    for (let num of nums) {
        //. 2a. If it does exist: return true;
        if (set.has(num)) return true;
        //. 2b. If it doesn't exist: add it to the set.
        else set.add(num);
    }

    // 3. Return false as our backup
    return false;
}
