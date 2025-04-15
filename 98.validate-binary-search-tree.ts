/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  // Helper function with min and max bounds
  function isValid(
    node: TreeNode | null,
    min: number | null,
    max: number | null
  ): boolean {
    // Empty tree is valid
    if (!node) return true;

    // Check if current node respects the bounds
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }

    // Check left and right subtrees with updated bounds
    return (
      isValid(node.left, min, node.val) && isValid(node.right, node.val, max)
    );
  }

  // Start recursion with no bounds
  return isValid(root, null, null);
}
// @lc code=end
