/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
     let count = 0;
    if(count !== nums.length){
     for(let i=0; i<nums.length; i++){
        if(nums[i] === 0){
           nums.splice(i,1);
            count++;
           i--;
        }
     }
    for(let i=0; i<count; i++){
    nums.push(0)
    }
}
}
//     for(let i=0; i<nums.length; i++){
        
//         if(nums[i] === 0){ // 요소가 0이면
//             nums[i].
//              nums.push();
//             }
//             count--;
//         }
//         }
//         if(count === 0){
//             break;
//         }
//         if(nums.slice(-check.length).flat() == check){
//          break;
//         }
    // }

    
 

    // console.log(nums.slice(-check.length).flat())
    // console.log(check)

    
    //////////////////
//     let count = 0;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i] === 0 ){
//             count++;
//         }
//     }
//     if(count !== nums.length){
//     for(let i=0; i<nums.length; i++){
        
//         if(nums[i] == 0 ) {          
//             nums.splice(i,1);
//             nums.push(0)
//             count--;
//         }
//         if(count == 0){
//             break;
//         }
//         }
//     }
    
    /////////////////
    
    
    // for(let i=0; i<nums.length; i++){
    //         if(nums[j] == 0) {
    //         nums[j] = nums[j+1];
    //         nums[j+1] = 0;        
    //     }
    // }
