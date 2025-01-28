/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let currentSum = 0;
  let maxSum: number = -Infinity;

  for (let num of nums) {
    currentSum += num;
    if (currentSum < num) {
      // Reset here - we've gone backward
      currentSum = num;
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}
// @lc code=end
