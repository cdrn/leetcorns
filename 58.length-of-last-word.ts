/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  let splitString = s.trim().split(" ");
  return splitString[splitString.length - 1].length;
}
// @lc code=end
