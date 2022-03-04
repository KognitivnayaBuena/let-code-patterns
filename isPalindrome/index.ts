import { ListNode } from "../types";

// time coplexity O(n), space complexity O(n)

function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true;

  let values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = values.length - 1;

  while (left < right) {
    if (values[left] !== values[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
