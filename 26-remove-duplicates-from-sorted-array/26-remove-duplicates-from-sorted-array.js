/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i=0; i<nums.length; i++){
        for(let j=1+i; j<nums.length; j++){
            if(nums[i] == nums[j]){
                nums.splice(j,1);
                j--
            }
        }
    }
};