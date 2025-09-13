/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length != t.length)
        return false;

    //Create Frequency map
    let Smap = new Map();
    let Tmap = new Map();

    for(let i = 0; i < s.length; i++){
        Smap.set(s[i], (Smap.get(s[i]) || 0) + 1);
        Tmap.set(t[i], (Tmap.get(t[i]) || 0) + 1);
    }
    // console.log("Smap :", Smap);
    // console.log("Tmap :", Tmap);

    for(let element of s){
        if (Smap.get(element) != Tmap.get(element))
            return false;
    }
    return true;
    
};
// @lc code=end

