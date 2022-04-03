/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let a = s.split(" "); // [abc, def, ghi, jkl]
    for(let i=0; i<a.length; i++){
        a[i] = a[i]
            .split("")
            .reverse()
            .join("")       
    }
    return a.join(" ");
};