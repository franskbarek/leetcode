/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanSymbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < romanSymbol.length; i++) {
    console.log(i);
  }
  console.log(romanSymbol);
  return romanSymbol == s ? true : false;
};

// test case
console.log(romanToInt(10));
console.log(romanToInt(1990));
console.log(romanToInt(2));
