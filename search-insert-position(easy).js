/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  return nums.filter((x) => x < target).length;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
