// rangeSumQuery O(n) solution
class NumArray {
  numsArr: number[];
  constructor(nums: number[]) {
    this.numsArr = nums;
  }

  sumRange(left: number, right: number): number {
    let result = 0;

    for (let i = left; i <= right; i++) {
      result += this.numsArr[i];
    }

    return result;
  }
}

const NUMS = [1, 2, 3, 4, 5];
const LEFT = 0;
const RIGHT = 2;

let obj = new NumArray(NUMS);
let sum = obj.sumRange(LEFT, RIGHT); // 6

// faster solution, one sum running O(n) and get result for O(1)
// Take memory for sums result O(n)
class NumArrayV2 {
  nums: number[];
  sums: number[];
  currentSum: number;
  constructor(nums: number[]) {
    this.nums = nums;
    this.currentSum = 0;
    this.sums = [];

    for (let i = 0; i < nums.length; i++) {
      this.currentSum += nums[i];

      this.sums.push(this.currentSum);
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) {
      return this.sums[right];
    }

    return this.sums[right] - this.sums[left - 1];
  }
}
