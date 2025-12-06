import { ListNode } from "../../../../Types/ListNode/ListNode";

export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast && fast.next) {
    if (slow === fast) return true; // cycle found;
    slow = slow!.next;
    fast = fast.next.next;
  }

  return false;
}
