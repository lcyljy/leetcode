/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // console.log(digits.join("")) // 아 ㅅ... 숫자 최대치 넘어갔네...
    // let first = parseInt(digits.join(""))+1
    // console.log(first)
    // let a = first
    // .toString()
    // .split("")
    // .map(Number)
    // console.log(first.toString())
    // console.log(first.toString().split(""))
    // console.log(first.toString().split("").map(Number))
    // return a 편법 실패
    
    for(let i=digits.length-1; i>-1; i--){
        let a = digits[i];
        if(a<9){
            digits[i] = digits[i]+1;
            return digits;
        }
        digits[i] = 0;
    }
    return[1, ...digits];
};