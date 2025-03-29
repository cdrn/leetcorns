/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // If price went up, add the difference to our profit
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1];
    }
    // If price went down, do nothing (we wouldn't have bought)
  }

  return totalProfit;
}
// @lc code=end
