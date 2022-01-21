//leetcode.com/problems/missing-number/submissions/

// O(n) - alghoritm, O(n) - memory solution
function missingNumber(nums: number[]): number {
  let result = 0;
  let allElements = [];
  const elements = new Set(nums);

  for (let i = 0; i < nums.length + 1; i++) {
    allElements.push(i);
  }

  for (let j = 0; j < allElements.length; j++) {
    if (!elements.has(j)) {
      result = j;
    }
  }

  return result;
}

// Math variant, also O(n) - alghoritm, memory O(1)
// Summation solution
function missingNumberV2(nums: number[]): number {
  const numsLength = nums.length;
  const summOfNums = nums.reduce((prev, curr) => prev + curr); // check summ of all items

  // pretend that we have all numbers and get the sum. Then subtract real sum and get the result number.
  const result = (numsLength * (numsLength + 1)) / 2 - summOfNums;
  return result;
}
