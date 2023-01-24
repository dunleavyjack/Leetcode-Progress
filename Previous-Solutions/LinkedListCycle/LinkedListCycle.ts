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

function hasCycle(head: ListNode | null): boolean {
    // Solution uses tortoise and hare.
    // Initalize one slow pointer and one fast pointer
    let slow: any = head;
    let fast: any = head;

    // If fast pointer hits null (meaning list has an end), exit loop and return false
    // If not, increase slow pointer by one node and fast pointer by two nodes
    // If they meet, that means there is a cycle in the list
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }

    return false;
}
