import { ListNode } from '../../types';

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;

    let length = 1;
    let temp = head;

    while (temp.next) {
        length++;
        temp = temp.next;
    }

    temp.next = head;
    for (let i = 0; i < length - (k % length); i++) {
        temp = temp.next as ListNode;
    }

    head = temp.next;
    temp.next = null;
    return head;
}
