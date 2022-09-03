/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  console.log(roman.get("I"));
  console.log(roman.get("M"));
  console.log(roman.has("V"));
};
// test case
console.log(romanToInt("I"));
