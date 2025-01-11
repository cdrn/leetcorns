/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const indexMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    let diff = target - val;

    if (indexMap.has(diff)) {
      return [indexMap.get(diff)!, i];
    }

    indexMap.set(nums[i], i);
  }
  // compiler
  return [0, 0];
}
// @lc code=end
