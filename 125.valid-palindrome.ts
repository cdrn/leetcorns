/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  // phoning it in
  let allowed = new Set("abcdefghijklmnopqrstuvwxyz0123456789".split(""));

  let stripped = s
    .toLowerCase()
    .split("")
    .map((x) => (allowed.has(x) ? x : ""));

  return stripped.join("") === stripped.reverse().join("");
}
// @lc code=end
