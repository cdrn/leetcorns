/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  const lastIndex = nums.length - 1;
  let pointer = 0;

  while (pointer < lastIndex) {
    let [biggestNextHop, biggestNextHopIndex] = [0, pointer];

    // Ensure we don't go out of bounds
    const maxReach = Math.min(lastIndex, nums[pointer] + pointer);

    // Find the best next hop
    for (let j = pointer + 1; j <= maxReach; j++) {
      if (nums[j] + j > biggestNextHop + biggestNextHopIndex) {
        biggestNextHop = nums[j];
        biggestNextHopIndex = j;
      }
    }

    // If we can't move forward, return false
    if (biggestNextHopIndex === pointer) return false;

    pointer = biggestNextHopIndex;

    // If we've reached the last index, return true
    if (pointer >= lastIndex) return true;
  }

  return true;
}
// @lc code=end
