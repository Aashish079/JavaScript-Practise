/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

function createFrequencyMap(array){
    const map = new Map();

    for(let element of array){
        map.set(element,(map.get(element) || 0) + 1);
    }
    return map;
}

var containsDuplicate = function(nums) {
    // Takes too much time.
    // for(let i=0;i<nums.length; i++  ){
    //     key = nums[i];
    //     for(j=0 ; j< nums.length; j++){
    //         if(i !== j && key === nums[j]){  // Skip comparing with itself
    //             return true
    //         }
    //     }
    // }
    // return false;
    
    // Still not good enough
    // for(let i=0;i<nums.length; i++  ){
    //     key = nums[i];
    //     const count = nums.filter(x => x === key).length
    //     if(count>1)
    //         return true;
    // }
    // return false;

    // Still not good enough
    // for(let i=0;i<nums.length; i++  ){
    //     key = nums[i];
    //     const count = nums.reduce((acc,x)=>(x === key? acc + 1: acc), 0);
    //     if(count>1)
    //         return true;
    // }
    // return false;

    const map = new Map();

    for(let element of nums){
        map.set(element, (map.get(element) || 0) + 1)
        if(map.get(element) >= 2){
            return true;
        }
    }
    return false;
};

// @lc code=end

