// Floyd's Cycle Finding Algorithm
// Time complexity O(n)
// Space complexity equals O(1)

type ListNode = {
  val: number;
  next: ListNode | null;
};

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  // slow and fast pointer algorithm
  let slow = head;
  let fast = head;

  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;

    // when they met each other it means that we have cycle
    if (fast === slow) {
      return true;
    }
  }

  // if we just move thow cycle and don't match pointers
  // we not in cycle

  return false;
}
