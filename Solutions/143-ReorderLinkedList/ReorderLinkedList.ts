import { ListNode } from "../../Types";

function reorderList(head: ListNode | null): void {
  // 1. Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow!.next;
  }

  let mid = slow;

  // 2. Reverse second half of list
  let prev: ListNode | null = null;

  while (mid) {
    const temp = mid.next;
    mid.next = prev;
    prev = mid;
    mid = temp;
  }

  // 3. Merge the two halves
  let firstHalf = head;
  let secondHalf = prev;

  while (secondHalf!.next) {
    const temp1 = firstHalf!.next;
    const temp2 = secondHalf!.next;
    firstHalf!.next = secondHalf;
    secondHalf!.next = temp1;
    firstHalf = temp1;
    secondHalf = temp2;
  }
}
