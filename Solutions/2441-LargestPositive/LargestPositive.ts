function findMaxK(nums: number[]): number {
    let set = new Set<number>();
    let largest = 0;

    for(let num of nums){
        if(num > 0){
            if(set.has(num * -1)){
                largest = Math.max(num, largest)
            }
        } else {
            if(set.has(Math.abs(num))){
                largest = Math.max(Math.abs(num), largest);
            }
        }
        
        set.add(num)
    }

    return largest || -1
}