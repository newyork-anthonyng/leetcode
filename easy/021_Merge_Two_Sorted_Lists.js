/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	var preHead = new ListNode(0);
	var last = preHead;

	while(l1 !== null && l2 !== null) {
		if(l1.val < l2.val) {
			last.next = l1;
			l1 = l1.next;
		} else {
			last.next = l2;
			l2 = l2.next;
		}

		last = last.next;
	}

	while(l1 !== null) {
		last.next = l1;
		l1 = l1.next;
		last = last.next;
	}

	while(l2 !== null) {
		last.next = l2;
		l2 = l2.next;
		last = last.next;
	}

	return preHead.next;
};
