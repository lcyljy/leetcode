/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let palindrome = x.toString();
    if (palindrome.split("").reverse().join("") == palindrome) {
        return true
    } else {
        return false
    }
};