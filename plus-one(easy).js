/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let carry = 1;
  const result = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    carry = Math.floor(sum / 10);
    result.unshift(sum % 10);
  }

  if (carry > 0) {
    result.unshift(carry);
  }

  return result;
};

// test case 1
console.log(plusOne([1, 2, 3])); //expect [1,2,4]

// test case 2
console.log(plusOne([4, 3, 2, 1])); //expect [4,3,2,2]

// test case 3
console.log(plusOne([9])); //expect [1, 0]

// test case 4
console.log(plusOne([1, 0, 0])); //expect [1, 0]
