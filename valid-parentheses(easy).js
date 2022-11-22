/**
 * @param {string} s
 * @return {boolean}
 */

/**
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 
 * * Hint:
 * 1. Use a stack of characters.
 * 2. When you encounter an opening bracket, push it to the top of the stack.
 * 3. When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it
 * 4. from the stack. Otherwise, return false.
 */
// solution#1 80ms
/**
 * 
 var isValid = function (s) {
   if (s.includes("()[]{}") || s.includes("()") || s.includes("[]") || s.includes("{}") || s.includes("()[]") || s.includes("{}[]") || s.includes("(){}")) {
     return true;
    } else {
      return false;
    }
  };
*/

// solution#2 42ms
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (char !== stack.pop()) {
          return false;
        }
    }
  }
  return !stack.length;
};

// test case
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
