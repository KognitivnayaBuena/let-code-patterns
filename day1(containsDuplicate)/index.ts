// https://leetcode.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
  const uniqElements = Array.from(new Set(nums)); // o(1)
  const isWithoutDuplicate = uniqElements.length === nums.length;

  return !isWithoutDuplicate;
}
