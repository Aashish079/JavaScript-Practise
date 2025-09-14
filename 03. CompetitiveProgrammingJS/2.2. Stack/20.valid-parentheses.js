/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {')':'(', ']':'[','}':'{'};

    for(const ch of s){
        
        if (ch == '(' || ch == '[' || ch == '{'){
            stack.push(ch);
        }
        else if (ch in pairs){ 
            if(stack.pop() != pairs[ch]) return false;
        }
        else{
            return false; // for invalid Character
        }
    }
    
    return stack.length === 0;
};

// Time: O(n) Space: O(n)

// @lc code=end

