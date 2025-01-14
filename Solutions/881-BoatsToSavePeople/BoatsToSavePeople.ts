function numRescueBoats(people: number[], limit: number): number {
  people = people.sort((a, b) => a - b);

  let totalBoats = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (left === right) {
      totalBoats++;
      break;
    }

    const sum = people[left] + people[right];
    if (sum > limit) {
      totalBoats++;
      right--;
    } else {
      totalBoats++;
      right--;
      left++;
    }
  }

  return totalBoats;
}
