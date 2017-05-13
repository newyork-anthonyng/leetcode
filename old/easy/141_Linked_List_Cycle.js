/*
Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 /*
 In this solution, we will have a pointer go through the list, one node at a time.
 We will have a second pointer go through the list two nodes at a time.
 If the list has a cycle in it, the slow and fast pointers will eventually meet.
 */
var hasCycle = function(head) {
	if(head === null || head.next === null) return false;

	var slow = head;
	var fast = head.next;

	while(slow !== fast) {
		if(fast === null || fast.next === null) {
			return false;
		}

		slow = slow.next;
		fast = fast.next.next;
	}

	return true;
};
