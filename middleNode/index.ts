import { ListNode } from "../types";

// space complexity O(1)
// Time complexity O(n)

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  // because fast pointer go 2x speed slow will be in the midle when fast go thow the whole list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
