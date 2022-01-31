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
