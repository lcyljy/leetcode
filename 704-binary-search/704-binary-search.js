/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        if( nums[i] == target) {
            return i;
        }
        if( nums[i] == nums[nums.length-1] && nums[i] !== target){
            return -1;
        }
    }
};