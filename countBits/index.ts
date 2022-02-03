// O(n)
function countBits(n: number): number[] {
  let result = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    if (i < 2) result[i] = i;
    else {
      let a = result[i >> 1];
      result[i] = a + (i % 2 == 0 ? 0 : 1);
    }
  }
  return result;
}
