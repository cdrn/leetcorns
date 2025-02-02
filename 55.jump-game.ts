/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
// Greedy approach, aka the right way
function canJump(nums: number[]): boolean {
  let farthest = 0; // max index we can reach
  // We just track the farthest reach at every step, and if the i
  // in the loop ever exceeds it, we know we can't reach the end. Duh.

  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) return false; // stuck, can't go further
    farthest = Math.max(farthest, i + nums[i]); // update max reach
    if (farthest >= nums.length - 1) return true; // we can reach the end
  }

  return false;
}

// function canJump(nums: number[]): boolean {
//   const lastIndex = nums.length - 1;
//   let pointer = 0;

//   while (pointer < lastIndex) {
//     let [biggestNextHop, biggestNextHopIndex] = [0, pointer];

//     // Ensure we don't go out of bounds
//     const maxReach = Math.min(lastIndex, nums[pointer] + pointer);

//     // Find the best next hop
//     for (let j = pointer + 1; j <= maxReach; j++) {
//       if (nums[j] + j > biggestNextHop + biggestNextHopIndex) {
//         biggestNextHop = nums[j];
//         biggestNextHopIndex = j;
//       }
//     }

//     // If we can't move forward, return false
//     if (biggestNextHopIndex === pointer) return false;

//     pointer = biggestNextHopIndex;

//     // If we've reached the last index, return true
//     if (pointer >= lastIndex) return true;
//   }

//   return true;
// }
// @lc code=end
