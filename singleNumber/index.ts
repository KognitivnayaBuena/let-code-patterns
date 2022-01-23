// XOR Solution, O(n), memory O(1)
function singleNumber(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }

  return result;
}

// O(n), memory O(n)
function singleNumberV2(nums: number[]): number {
  const data = {};

  for (let i = 0; i < nums.length; i++) {
    const currValue = data[nums[i]];

    if (!currValue) {
      data[nums[i]] = 1;
    } else {
      data[nums[i]] = currValue + 1;
    }
  }

  let result = 0;

  for (let j = 0; j < nums.length; j++) {
    const curr = data[nums[j]];

    if (curr === 1) {
      result = nums[j];
    }
  }

  return result;
}
