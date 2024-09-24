import { ListNode } from "../../Types";

export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;
  let slow = dummy;

  // Increment curr n steps ahead of slow
  while (n && curr) {
    curr = curr.next;
    n--;
  }

  // Increment both until curr reaches the end
  while (curr.next) {
    curr = curr.next;
    slow = slow.next;
  }

  // Slow will be directly before the node to skip. Skip it!
  slow.next = slow?.next?.next ?? null;

  return dummy.next;
}
