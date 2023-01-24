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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // Case if list is empty
    if (head === null) {
        return head;
    }

    // Create variable for length of list and the current node
    let lengthOfList: number = 0;
    let currentNode: any = head;

    // Calculate the length of the list
    for (let i = lengthOfList; currentNode !== null; i++) {
        currentNode = currentNode.next;
        lengthOfList++;
    }
    console.log(lengthOfList);
    if (lengthOfList === 1) return null;
    if (lengthOfList === 2) {
        if (n === 1) {
            head.next = null;
            return head;
        }
    }

    // Case when first node needs to be removed
    if (lengthOfList === n) {
        head = head.next;
        return head;
    }

    // Assign current node and
    currentNode = head;
    for (let i = 0; i < lengthOfList - n - 1; i++) {
        currentNode = currentNode.next;
    }

    currentNode.next = currentNode.next?.next || null;

    return head;
}
