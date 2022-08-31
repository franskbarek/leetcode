/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Solution #1. just brute force used for
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (target == nums[j] + nums[i]) {
        return [i, j];
      }
    }
  }

  // Solution #2. map method
  //   const hash = new Map();

  //   for (let i = 0; i < nums.length; i++) {
  //     if (hash.has(nums[i])) return [i, hash.get(nums[i])];
  //     else hash.set(target - nums[i], i);
  //   }
};

// test all case when haved following cond...
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
