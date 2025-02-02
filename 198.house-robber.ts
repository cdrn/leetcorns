/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start

function rob(nums: number[]): number {
  let memo: Record<number, number> = {};

  function dfs(i: number) {
    if (i < 0) return 0; // Base case, we have run out of houses
    if (memo[i] !== undefined) return memo[i];

    // We have two choices here, when constructing the tree
    // 1. skip the current house, take the best loot from house 0... i-1
    // 2. Rob the current house. nums[i] + the best loot from house 0... i-2
    memo[i] = Math.max(dfs(i - 1), nums[i] + dfs(i - 2));
    return memo[i];
  }

  return dfs(nums.length - 1);
}
// @lc code=end
