export {};

// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    let current: ListNode = head;
    let previous: ListNode = null;
    let nextNode: ListNode = null;

    while (current !== null) {
        // Shift node down the list
        current = nextNode;
        previous = current;
        nextNode = current.next;
        current.next = previous;
    }

    return previous;
}
