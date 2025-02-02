/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
let memo: Record<number, number> = {};

function climbStairs(n: number): number {
  if (n <= 2) return n;

  if (memo[n]) return memo[n];

  memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return memo[n] as number;
}
// @lc code=end
