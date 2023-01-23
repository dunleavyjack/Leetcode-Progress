import { ListNode } from '../../Definitions/ListNode';

function middleNode(head: ListNode | null): ListNode | null {
    // Find the length of the linked list
    // If head exists we can assume length is at least 1
    let lengthOfList: number = 0;
    let middleOfList: number;
    let currentNode: ListNode | null = head;
    let middleNode: ListNode | null = head;

    while (currentNode !== null) {
        lengthOfList++;
        currentNode = currentNode.next;
    }

    // Using the length, find the middle
    middleOfList = Math.floor(lengthOfList / 2);

    for (let i: number = 0; i < middleOfList; i++) {
        middleNode = middleNode?.next || null;
    }

    return middleNode;
}
