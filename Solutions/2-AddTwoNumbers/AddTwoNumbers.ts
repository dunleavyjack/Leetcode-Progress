import { ListNode } from "../../types";

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carryOver = 0;
  let dummy = new ListNode();
  let tail = dummy;

  while (l1 || l2 || carryOver) {
    let total = carryOver + (l1?.val ?? 0) + (l2?.val ?? 0);
    carryOver = Math.floor(total / 10);
    total = total % 10;

    const newNode = new ListNode(total);
    tail.next = newNode;
    tail = tail.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}
