import { ListNode } from "../../../Types/ListNode/ListNode";

function isPalindrome(head: ListNode | null): boolean {
  let arr: number[] = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let p1 = 0;
  let p2 = arr.length - 1;

  while (p1 < p2) {
    if (arr[p1] !== arr[p2]) return false;
    p1++;
    p2--;
  }

  return true;
}
