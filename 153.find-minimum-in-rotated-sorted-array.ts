/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // If the middle value is greater than the right bound, we're not at the rotation point
    // the lowest value must be to the right
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // When left meets right, we have our pivot.
  return nums[left];
}
// @lc code=end
