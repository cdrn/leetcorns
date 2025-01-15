/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // use <= to ensure all indices are checked
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid; // target found
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  // when loop exits, left points to the correct insertion position
  return left;
}
// @lc code=end
