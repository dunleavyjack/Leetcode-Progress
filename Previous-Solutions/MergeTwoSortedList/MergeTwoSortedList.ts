export {};

//  Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Start of result
function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    let blankNode = new ListNode();
    let tailNode: ListNode = blankNode;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            tailNode.next = list1;
            list1 = list1.next;
        } else {
            tailNode.next = list2;
            list2 = list2.next;
        }
    }

    list1 ? (tailNode.next = list1) : (tailNode.next = list2);

    return blankNode.next;
}
