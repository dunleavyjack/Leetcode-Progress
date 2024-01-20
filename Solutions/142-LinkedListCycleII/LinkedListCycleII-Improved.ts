import { ListNode } from '../../types';

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return head;

    let slow,
        fast: ListNode | null = head;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) break;
    }

    slow = head;

    while (slow.next) {
        if (slow === head) return slow;
        slow = slow.next;
    }

    return slow;
}
