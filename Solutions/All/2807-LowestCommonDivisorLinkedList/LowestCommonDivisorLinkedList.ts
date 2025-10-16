import { ListNode } from "../../../Types";

export function insertGreatestCommonDivisors(
  head: ListNode | null
): ListNode | null {
  let curr = head;

  while (curr && curr.next) {
    let lcd = lowestCommonDivisor(curr.val, curr.next.val);
    const newNode = new ListNode(lcd);

    newNode.next = curr.next;
    curr.next = newNode;

    curr = newNode.next;
  }

  return head;
}

function lowestCommonDivisor(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
