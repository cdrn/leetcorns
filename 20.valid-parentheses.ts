/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  let bracketMapping: Record<string, string> = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];

  for (let bracket of s) {
    if (bracketMapping[bracket] !== undefined) {
      stack.push(bracket);
    } else {
      let opening = stack.pop();
      if (bracket !== bracketMapping[opening || ""]) {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
// @lc code=end
