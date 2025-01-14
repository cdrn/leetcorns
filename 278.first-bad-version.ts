/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while (left !== right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    // When left === right, we're saying we have a value where it's the first breaking,
    // as all of our lefts are exclusive of bad values (+1) but our rights are inclusive
    return left;
  };
};
// @lc code=end
