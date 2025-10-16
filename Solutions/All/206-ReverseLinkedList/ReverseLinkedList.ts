//   Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseList(head: ListNode | null): ListNode | null {
    // Safety check
    if (!head) return null;

    let currentNode: ListNode | null = head;
    let previousNode: ListNode | null = null;
    let nextNode: ListNode | null = null;

    while (currentNode !== null) {
        nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }

    return previousNode;
}
