import { ListNode } from "../../../../Types/ListNode/ListNode";

export function reverseList(head: ListNode | null): ListNode | null {
  let curr = head;
  let prev: ListNode | null = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
