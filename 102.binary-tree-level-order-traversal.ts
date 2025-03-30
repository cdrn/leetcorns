/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []; // Handle null root

  let queue: Array<[TreeNode, number]> = [[root, 0]]; // Start with level 0
  let result: number[][] = [];

  while (queue.length > 0) {
    const [node, level] = queue.shift()!;

    // If we need a new array for this level
    if (result.length === level) {
      result.push([]);
    }

    // Add the current node value to its level array
    result[level].push(node.val);

    // Add children to the queue
    if (node.left) {
      queue.push([node.left, level + 1]);
    }
    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

  return result;
}

// @lc code=end
