type Transaction = [number, number, number]; // [giver, receiver, amount]

function minTransfers(transactions: Transaction[]): number {
  let balanceMap = new Map<number, number>(); // [person: balance]

  // Populate map with each person and their balance
  for (let [giver, reciever, amount] of transactions) {
    balanceMap.set(giver, (balanceMap.get(giver) || 0) - amount);
    balanceMap.set(reciever, (balanceMap.get(reciever) || 0) + amount);
  }

  // Create array of only non-0 balances. We don't care about the person anymore.
  // We only care that there are `balances.length` amount of people who are OOB!
  const balances = Array.from(balanceMap.values()).filter(
    (balance) => balance !== 0,
  );

  function dfs(balancesIndex: number) {
    // Skip balances that are already settled
    while (balancesIndex < balances.length && balances[balancesIndex] === 0) {
      balancesIndex++;
    }

    // Base case: If we reach the end of the array, all balances are settled.
    // Return 0
    if (balancesIndex === balances.length) return 0;

    let minTransactions = Infinity;
    for (let i = balancesIndex + 1; i < balances.length; i++) {
      // We want to find two people with opposite +/- numbers.
      // Both ++ or -- will equal a positive number. Opposites will be negative

      // Basically, if two balances
      if (balances[balancesIndex] * balances[i] < 0) {
        balances[i] += balances[balancesIndex];
        minTransactions = Math.min(minTransactions, 1 + dfs(balancesIndex + 1));
        balances[i] -= balances[balancesIndex];
      }
    }

    return minTransactions;
  }

  return dfs(0);
}
