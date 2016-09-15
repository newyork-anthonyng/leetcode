/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
	var current = head;
	var next;

	while(current) {
		next = current.next;

		if(!next) break;

		if(current.val === next.val) {
			current.next = next.next;
		} else {
			current = current.next;
		}
	}

	return head;
};
