/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  const reversed = x.toString().split("").reverse().join("");

  if (x.toString() === reversed) return true;
  return false;
}
// @lc code=end
