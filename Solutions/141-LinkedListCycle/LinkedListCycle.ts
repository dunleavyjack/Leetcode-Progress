import { ListNode } from '../../types';

function hasCycle(head: ListNode | null) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow?.next;
        fast = fast.next.next;

        if (slow === fast) return true;
    }

    return false;
}
