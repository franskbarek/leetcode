/**
 * @param {string} s
 * @return {number}
 */
const romanNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
const romanToInt = function (s) {
  console.log(romanNums);

  value = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(i);
    console.log(romanNums[s[i]]);
    console.log(romanNums[s[i + 1]]);
    console.log(value);

    romanNums[s[i]] < romanNums[s[i + 1]] ? (value -= romanNums[s[i]]) : (value += romanNums[s[i]]);
  }
  return value;
};
// test case
// console.log(romanToInt("IV"));
// console.log(romanToInt("II"));
// console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
