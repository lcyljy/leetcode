/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
     return function(n){
        if(isBadVersion(1)){ return 1};
         
        let startIndex = 1;
        let endIndex = n;
        
        while(startIndex < endIndex){
            const mid = startIndex+Math.floor((endIndex-startIndex)/2);
            let thisBad = isBadVersion(mid);
            let nextBad = isBadVersion(mid+1);
            if( !thisBad == nextBad){return mid+1}
            if(thisBad){
                endIndex = mid; // true 
            } else {
                startIndex = mid; // false
            }
          
        }
    }
}
// 1 mid = 3 false st = 3
// 2 mid = 4 st = 4
// 3 mid = 4

//     return function(n) {
//         let start = 1;
//         let end = n;
//         let check = start;
//         if( n> 1) {
//         while( isBadVersion(Math.floor(start + end)/2) == false) { 
//             check = Math.floor((start+end)/2)
//             start = check;
//             if( end-start == 1 ) return end;
//         }
//         while(isBadVersion(Math.floor(start + end)/2) == true) {
//             check = Math.floor((start+end)/2)
//             end = check;
//             if( end-start == 1 ) return end;
//         } 
//        } else {
//            return 1;
//        }
        // 시작과 n을 더해서 2로 나눈값이 false이면. 해당 값(check)보다 낮은 값은 false. 즉, bad는 check보다 크고 end보단 작다.
        // check부터 n을 더해서 2로 나눈값이 true면. 해당 값보다 작은 값이 bad값.
        // 1부터 100까지의 버전이 있다고 하고, 56번째부터 오류가 났다고 가정하면. // 55 false 56 true
        // 1회전. false check = 50, start = 50 end = 100; 
        // 2회전  true check = 75, start = 50 end = 75; 
        // 3회전  true check = 62, start = 50 end = 62; 
        // 4회전  true check= 56, start = 50 end = 56;
        // 5회전  false check = 53, start = 53 end = 56;
        // 6회전  false check = 54 start = 54, end = 56;
        // 7회전  false check = 55 start = 55 end = 56
        
        // 1부터 10까지 버전이 있다고 하고, 4번째부터 오류가 났다고 가정하면 // 3 false 4 true
        // 1회전 true check = 5, start = 1, end = 5;
        // 2회전 false check = 3, start = 3, end = 5;
        // 3회전 true check = 4, start = 3, end = 4;
