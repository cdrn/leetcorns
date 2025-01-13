/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const romanToIntegerMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let stringList = s.split("");
  let returnInteger = 0;

  while (stringList.length > 0) {
    let character = stringList.pop() as string;
    let peekLeft = stringList[stringList.length - 1];
    let characterValue = romanToIntegerMap[character];

    if (character === "I") {
      returnInteger += characterValue;
    }

    if (character === "X" || character === "V") {
      if (peekLeft === "I") {
        // pop it off the stack
        stringList.pop();
        returnInteger += characterValue - 1;
      } else {
        returnInteger += characterValue;
      }
    }

    if (character === "L" || character === "C") {
      if (peekLeft === "X") {
        // pop it off the stack
        stringList.pop();
        returnInteger += characterValue - 10;
      } else {
        returnInteger += characterValue;
      }
    }

    if (character === "D" || character === "M") {
      if (peekLeft === "C") {
        // pop it off the stack
        stringList.pop();
        returnInteger += characterValue - 100;
      } else {
        returnInteger += characterValue;
      }
    }
  }

  return returnInteger;
}
// @lc code=end
