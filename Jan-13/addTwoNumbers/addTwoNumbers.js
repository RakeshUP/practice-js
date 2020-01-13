/* eslint-disable no-param-reassign */
const addTwoNumbers = (l1, l2) => {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  let addedList;
  let currentNode;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let l1Val = 0;
    let l2Val = 0;
    if (l1) {
      l1Val = l1.val;
    }
    if (l2) {
      l2Val = l2.val;
    }
    const currVal = l1Val + l2Val;
    const nodeVal = currVal + carry;
    if (addedList === undefined) {
      addedList = new ListNode(nodeVal % 10);
      currentNode = addedList;
    } else {
      const newLink = new ListNode(nodeVal % 10);
      currentNode.next = newLink;
      currentNode = currentNode.next;
    }
    if (l1) { l1 = l1.next; }
    if (l2) { l2 = l2.next; }
    carry = Math.floor(nodeVal / 10);
    if (l1 === null && l2 === null && carry !== 0) {
      const newLink = new ListNode(carry);
      currentNode.next = newLink;
      currentNode = currentNode.next;
    }
  }
  return addedList;
};

export default addTwoNumbers;
