/*
 * @lc app=leetcode id=643 lang=typescript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
function findMaxAverage(nums: number[], k: number): number {
  // Calculate the sum of the first k elements
  let sliceTotal = nums.slice(0, k).reduce((acc, val) => acc + val, 0);
  let largestVal = sliceTotal;

  // Sliding window to update the sum for each new subarray of size k
  for (let i = k; i < nums.length; i++) {
    sliceTotal = sliceTotal + nums[i] - nums[i - k];
    largestVal = Math.max(largestVal, sliceTotal);
  }

  // Return the maximum average
  return largestVal / k;
}
// @lc code=end
