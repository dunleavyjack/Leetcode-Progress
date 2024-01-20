import { ListNode } from '../../types';

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    let dummy = new ListNode();
    let current = dummy;

    let carry = 0;

    while (l1 || l2 || carry) {
        const v1 = l1?.val ?? 0;
        const v2 = l2?.val ?? 0;

        let total = v1 + v2 + carry;
        carry = Math.floor(total / 10);
        total = total % 10;
        current.next = new ListNode(total);

        current = current.next;
        if (l1) l1 = l1?.next;
        if (l2) l2 = l2?.next;
    }

    return dummy.next;
}
