/*
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
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
var swapPairs = function(head) {
	var newNode = new ListNode(0);
	var dummy = newNode;
	var pairHead = head;
	var pairEnd, nextHead;

	while(pairHead) {
		if(!pairHead.next) {
			dummy.next = pairHead;
			break;
		}

		pairEnd = pairHead.next;
		nextHead = pairEnd.next;

		dummy.next = pairEnd;
		pairEnd.next = pairHead;
		dummy = pairHead;
		dummy.next = null;
		pairHead = nextHead;
	}

	return newNode.next;
};

function ListNode(val) {
	this.val = val;
	this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
a.next = b;

console.log(swapPairs(a));
