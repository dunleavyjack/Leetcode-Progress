import { ListNode } from '../../../Definitions/ListNode';

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return null;

    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr) {
        let tempNext = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNext;
    }

    return prev;
}
