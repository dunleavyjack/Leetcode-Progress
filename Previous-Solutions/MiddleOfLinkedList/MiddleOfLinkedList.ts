export {};

//   Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function middleNodeOfList(head: ListNode | null): ListNode | null {
    // Init a val of length of list, current node, and middle node
    let lengthOfList: number = 0;
    let currentNode: ListNode = head;
    let middleNode: ListNode = head;

    // Find the length of the list
    while (currentNode !== null) {
        lengthOfList += 1;
        currentNode = currentNode.next;
    }

    // Iterate through half of the list
    for (let i = 0; i < Math.floor(lengthOfList / 2); i++) {
        middleNode = middleNode.next;
    }

    return middleNode;
}
