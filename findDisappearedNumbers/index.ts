function findDisappearedNumbers(nums: number[]): number[] {
  const resultArrLength = nums.length;

  let allElements = [];

  for (let i = 1; i <= resultArrLength; i++) {
    allElements.push(i);
  }

  let result = [];

  const elements = new Set(nums);

  for (let j = 1; j <= allElements.length; j++) {
    if (!elements.has(j)) {
      result.push(j);
    }
  }

  return result;
}
