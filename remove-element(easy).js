// #1
// const removeElement = (nums, val) => {
//   let idx = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[idx] = nums[i];
//       idx++;
//     }
//   }
//   return idx;
// };

// #2
function removeElement(nums, val) {
  while (nums.indexOf(val, 0) >= 0) {
    nums.splice(nums.indexOf(val, 0), 1);
  }
  return nums.length;
}
// test case
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
