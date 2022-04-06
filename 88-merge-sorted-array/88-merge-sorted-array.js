/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // nums1과 nums2 배열 2개가 주어짐.
    // 해당 배열에서 0인 값들을 제외하고??? 0인값을 제외하는게 아니라 해당 배열의 길이를 제한하는건가?
    // nums1과 nums2의 합집합을 구해야함.
   //  function zeroDelete(arr){
   // for(let i=0; i<arr.length; i++){
   //     if(arr[i] == 0){
   //         arr.splice(i,1)
   //         i--
   //     }
   // }
   //  }
   //  zeroDelete(nums1)
   //  zeroDelete(nums2)
    nums1.length = m
    nums2.length = n
    for(let i=0; i<nums2.length; i++){
        if(nums1.indexOf(nums2[i]) !== -1){
            nums1.splice(nums1.indexOf(nums2[i]),0,nums2[i])
        } else {
            nums1.push(nums2[i])
        }
    }
    nums1.sort((a,b) => a-b)
   
    
};