/*
 * @lc app=leetcode id=162 lang=typescript
 *
 * [162] Find Peak Element
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
  // The key insight here is that it can either be a peak or not
  // numbers can only be greater, less or equal. Additionally, because
  // the edges act as lips, if nums[mid] is greater than nums[mid + 1]
  // then either it is a peak or there is a peak to the left
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
// @lc code=end
