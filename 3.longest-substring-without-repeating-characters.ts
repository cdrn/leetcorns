/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]); // remove leftmost character
      left++; // shrink the window
    }
    charSet.add(s[right]); // add current character
    maxLength = Math.max(maxLength, right - left + 1); // update max length
  }

  return maxLength;
}
// @lc code=end
