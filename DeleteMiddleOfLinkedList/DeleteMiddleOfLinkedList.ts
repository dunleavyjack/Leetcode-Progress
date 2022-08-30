export {};
// !! PROVIDED BY LEETCODE
// Definition of a linked list
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
// !! END OF PROVIDED BY LEETCODE

function deleteMiddle(head: ListNode | null): ListNode | null {
    // Init length of linked list
    let lengthOfList: number = 0;
    let lengthCounterNode: ListNode = head;
    let nodeBeforeMiddle: ListNode = head;

    // Find length of linked list in one iteration
    while (lengthCounterNode !== null) {
        lengthOfList++;
        lengthCounterNode = lengthCounterNode.next;
    }

    // Check for empty list
    if (lengthOfList === 1) {
        return null;
    }

    // Calculate position of middle index -1 (so we can know the one before middle)
    let nodeBeforeMiddleIndex: number = Math.floor(lengthOfList / 2) - 1;

    // Get to that index
    for (let i: number = 0; i < nodeBeforeMiddleIndex; i++) {
        nodeBeforeMiddle = nodeBeforeMiddle.next;
    }

    // Jump over middleNode
    nodeBeforeMiddle.next = nodeBeforeMiddle?.next?.next || null;

    return head;
}
