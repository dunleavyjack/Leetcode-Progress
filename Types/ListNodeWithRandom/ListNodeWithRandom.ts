//   Leetcode's Typescript Definition for Singly-Linked Lists.
export class ListNodeWithRandom {
  val: number;
  next: ListNodeWithRandom | null;
  random: ListNodeWithRandom | null;
  constructor(
    val?: number,
    next?: ListNodeWithRandom | null,
    random?: ListNodeWithRandom | null,
  ) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
  }
}
