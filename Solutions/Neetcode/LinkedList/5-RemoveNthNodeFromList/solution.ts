import { ListNode } from "../../../../Types";

export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  let nodesTraveled = 0;
  while (fast && nodesTraveled < n) {
    fast = fast.next;
    nodesTraveled++;
  }

  if (!fast) return head!.next;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next;
  }

  slow!.next = slow?.next?.next ?? null;

  return head;
}
