import { ListNode } from "../../../../Types";

export function reorderList(head: ListNode | null): void {
  if (!head || !head.next) return;

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  let half = slow.next;
  slow.next = null;

  let prev: ListNode | null = null;
  while (half) {
    const next = half.next;
    half.next = prev;
    prev = half;
    half = next;
  }

  let first: ListNode | null = head;
  let second: ListNode | null = prev;

  while (second) {
    const t1 = first!.next;
    const t2 = second.next;

    first!.next = second;
    second.next = t1;

    first = t1;
    second = t2;
  }
}
