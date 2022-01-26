// DP O(n) solution
function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = nums[0];

  if (nums.length === 1) {
    return maxSum;
  }

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];

    currentSum = Math.max(currentSum + num, num);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}
