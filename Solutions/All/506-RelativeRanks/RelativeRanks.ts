function findRelativeRanks(score: number[]): string[] {
    // Sort and store the score array in ascending order
    const scoreSortedInAscendingOrder = [...score].sort((a, b) => b - a);
    const placements = Array(score.length);
    

    for(let i = 0; i < score.length; i++){
        placements[i] = determinePlacement(scoreSortedInAscendingOrder.indexOf(score[i]))
    }
    
    return placements;
};

function determinePlacement(index: number): string{
    switch(index){
        case 0:
            return "Gold Medal"
            break;
        case 1:
            return "Silver Medal"
            break;
        case 2: 
            return "Bronze Medal"
            break;
        default:
            return String(index + 1)
    }
}