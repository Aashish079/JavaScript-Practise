/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isAlphaNumeric = function(c){
    return(
        c>='a'&& c<='z'||
        c>='A'&& c<='Z'||
        c>='0'&& c<='9'
    );
}

var isPalindrome = function(s) {
    let newStr = '';

    for(let c of s){
        if(isAlphaNumeric(c)){
            newStr += c.toLowerCase();
        }
    }

    return newStr == newStr.split('').reverse().join('');
    
};
// @lc code=end

