/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // solution 1. my way
  //   const rev = x.toString().split("").reverse().join("")
  //   return rev == x ? true : false

  // solution 2. 98% faster JavaScript solution without a string
  let xNew = 0;
  let xOld = x;

  if (x < 0) {
    return false;
  }

  while (x != 0) {
    let r = x % 10;
    xNew = xNew * 10 + r;
    x = Math.floor(x / 10);
  }

  if (xOld === xNew) {
    return true;
  }

  return false;
};

// test case
console.log(isPalindrome(121));
console.log(isPalindrome(-21));
console.log(isPalindrome(10));
