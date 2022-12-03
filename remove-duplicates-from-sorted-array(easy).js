/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 
 * #solution1
 const removeDuplicates = (nums) => {
     let i = 0
     for(let j = 0; j<nums.length;j++){
         if(nums[j] !== nums[i]){
             nums[++i] = nums[j]
            }
        }
        return ++i
    };
    */

// #solution2
const removeDuplicates = (nums) => {
  nums.splice(0, nums.length, ...new Set(nums));
};

//test case
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
