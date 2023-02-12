import { ListNode } from '../../../Definitions/ListNode';

function middleNode(head: ListNode | null): ListNode | null {
    if (!head) return head;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    return slow;
}
