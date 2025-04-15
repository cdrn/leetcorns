/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
  let numString = num.toString().split("");
  let total = num;

  while (numString.length > 1) {
    numString = total.toString().split("");
    total = numString.map((x) => Number(x)).reduce((prev, curr) => prev + curr);
  }
  return total;
}
// @lc code=end
