/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  let seenNums = new Set();
  for (let num of nums) {
    if (seenNums.has(num)) {
      return true;
    } else {
      seenNums.add(num);
    }
  }
  return false;
}
// @lc code=end
