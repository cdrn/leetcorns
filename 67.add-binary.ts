/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const longest = Math.max(a.length, b.length);

  let aArray = a.split("");
  let bArray = b.split("");

  let remainder = 0;

  let result: Array<number> = [];

  for (let i = 0; i < longest; i++) {
    let aVal = parseInt(aArray.pop() || "0");
    let bVal = parseInt(bArray.pop() || "0");
    // 1 + 1 + 1 mod 2 is 1
    // 1 + 1 + 0 mod 2 is 0
    // 1 + 0 + 0 mod 2 is 1
    let sum = (aVal + bVal + remainder) % 2;
    remainder = Math.floor((aVal + bVal + remainder) / 2); // Carry if it's 2 or more (3 is 10)
    result.push(sum);
  }
  if (remainder !== 0) {
    result.push(remainder);
  }

  return result.reverse().join("");
}
// @lc code=end
