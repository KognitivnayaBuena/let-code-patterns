// https://leetcode.com/problems/contains-duplicate/

function containsDuplicateV2(nums: number[]): boolean {
  const uniqElements = Array.from(new Set(nums)); // o(1)
  const isWithoutDuplicate = uniqElements.length === nums.length;

  return !isWithoutDuplicate;
}
