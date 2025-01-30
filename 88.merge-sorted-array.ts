/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m + n - 1; // last position in nums1
  let p1 = m - 1; // last element in nums1
  let p2 = n - 1; // last element in nums2

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1]; // move nums1[p1]
      p1--;
    } else {
      nums1[i] = nums2[p2]; // move nums2[p2]
      p2--;
    }
    i--; // move to next position
  }
}
// @lc code=end
