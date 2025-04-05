/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start

class DLLNode {
  key: number;
  val: number;
  prev: DLLNode | null = null;
  next: DLLNode | null = null;

  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
  }
}

class LRUCache {
  private cache: Map<number, DLLNode> = new Map();
  private capacity: number;
  private head: DLLNode | null = null; // Most recently used
  private tail: DLLNode | null = null; // Least recently used

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    const node = this.cache.get(key);
    if (!node) return -1;

    // Move to front (most recently used position)
    this.removeFromList(node);
    this.addToFront(node);

    return node.val;
  }

  put(key: number, value: number): void {
    // If key exists, update value and move to front
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.val = value;
      this.removeFromList(node);
      this.addToFront(node);
      return;
    }

    // If at capacity, remove least recently used (tail)
    if (this.cache.size >= this.capacity && this.tail) {
      this.cache.delete(this.tail.key);
      this.removeFromList(this.tail);
    }

    // Add new node to front
    const newNode = new DLLNode(key, value);
    this.addToFront(newNode);
    this.cache.set(key, newNode);
  }

  private removeFromList(node: DLLNode): void {
    // Fix prev pointer
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next; // Removing head
    }

    // Fix next pointer
    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev; // Removing tail
    }
  }

  private addToFront(node: DLLNode): void {
    node.next = this.head;
    node.prev = null;

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;

    // If this is the first node
    if (!this.tail) {
      this.tail = node;
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
