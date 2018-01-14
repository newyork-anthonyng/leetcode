function ListNode(val) {
  this.val = val;
  this.next = null;
}

function addTwoNumbers(list1, list2) {
  let firstCurrent = list1;
  let secondCurrent = list2;
  let carry = 0;
  let result = null;
  let previous = null; // helps us easily attach nodes to the end of the list

  while (firstCurrent !== null || secondCurrent !== null) {
    const firstValue = (firstCurrent && firstCurrent.val) || 0;
    const secondValue = (secondCurrent && secondCurrent.val) || 0;
    let sum = firstValue + secondValue + carry;

    // carry the one
    if (sum > 9) {
      carry = 1;
      sum = sum % 10;
    } else {
      carry = 0;
    }

    const newNode = new ListNode(sum);
    if (result === null) {
      result = newNode;
      previous = result;
    } else {
      previous.next = newNode;
      previous = newNode;
    }

    if (firstCurrent) firstCurrent = firstCurrent.next;
    if (secondCurrent) secondCurrent = secondCurrent.next;
  }

  if (carry) {
    previous.next = new ListNode(carry);
  }

  return result;
}

let first = new ListNode(5);
let second = new ListNode(5);
let result = addTwoNumbers(first, second);

console.log(result);
