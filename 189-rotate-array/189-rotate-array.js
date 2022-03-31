/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
//     nums 배열이 주어지고, k만큼 오른쪽으로 민다.
//     첫번째 시도 - Time Limit Exceeded
//     if (k>=nums.length){
//         k = k % nums.length;
//     }
//     for(let i=0; i<k; i++){
//         let lastArr = nums[nums.length-1]
//         nums.pop();
//         nums.unshift(lastArr)
//     }
//     return nums
    
//     두번째 시도 - Wrong Answer
//     if (k >= nums.length){
//         k = k % nums.length;
//     }
//     if( k == 0 ){
//         return nums
//     }
//     let a = [];
//     let b = [];
//     a = nums.slice(-k);
//     b = nums.slice(0,nums.length-k);
//     nums = a.concat(b);
//     return nums;
    
//     3번째 트라이... - Wrong Answer
//     if( k >= nums.length){
//         k = k % nums.length;
//     }
//     let length = nums.length;
//     let a = nums.slice(-k);
//     nums.unshift(a);
//     nums = nums.flat();
//     nums.length = length;
//     return nums;
    
    
//         if (k>=nums.length){
//         k = k % nums.length;
//     }
//     for(let i=0; i<k; i++){
//         nums.unshift(nums[nums.length-1])
//         nums.pop();
        
//     }
//     return nums
    if( k >= nums.length ){
        k = k % nums.length;
    }
    const a = nums.splice(nums.length - k, k)
    console.log(a);
    nums.unshift(...a);
};