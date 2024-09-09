// Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

//You are given two non-empty linked lists representing two non-negative integers.
//The digits are stored in reverse order, and each of their nodes contains a single digit.
//Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//Example 1:
//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.

//Example 2:
//Input: l1 = [0], l2 = [0]
//Output: [0]

//Example 3:
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]

//Constraints:
//The number of nodes in each linked list is in the range [1, 100].
//0 <= Node.val <= 9

//Follow up: Could you solve it without reversing the input lists?

const addTwoNumbers = (l1, l2) => {
  let carry = 0;
  let result = null;
  let current = null;
  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    if (!result) {
      result = current = new ListNode(sum % 10);
    } else {
      current.next = new ListNode(sum % 10);
      current = current.next;
    }
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }
  return result;
};
