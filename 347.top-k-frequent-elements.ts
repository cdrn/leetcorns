/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  // Here's the order n component, where we iterate the whole array and place it in a counter
  let counter: Record<string, number> = {};
  let arrayCounter = [];
  for (let num of nums) {
    if (!counter[num]) {
      counter[num] = 1;
    } else {
      counter[num] = counter[num] + 1;
    }
  }

  let kTop = Object.entries(counter)
    .sort((x, y) => y[1] - x[1])
    .slice(0, k);

  return kTop.map((x) => parseInt(x[0]));
}
// @lc code=end
