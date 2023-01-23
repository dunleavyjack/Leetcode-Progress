function middleNode(head: ListNode | null): ListNode | null {
    // Init a fast and slow pointer. The fast pointer will move twice as fast as the slow pointer
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;

    // While fast is not null and fast.next exists, move slow up one and fast up two
    while (fast !== null && fast.next) {
        slow = slow?.next || null;
        fast = fast.next.next;
    }

    // Return slow
    return slow;
}
