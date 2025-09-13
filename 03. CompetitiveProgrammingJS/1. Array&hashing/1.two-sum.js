/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//Two pointers won't work here because Array isn't sorted and sorting it will loose its index question wants.
// var twoSum = function(nums, target) {
//     nums.sort((a,b) => a-b);

//     let left = 0;
//     let right = nums.length - 1;

//     while(left<right){
//         if(nums[left]+nums[right] == target) return [left, right];
//         else if(nums[left]+nums[right] < target ) left++;
//         else right++;
//     }

//     return [0,0]
// };

var twoSum = function(nums, target) {
    let map = new Map(); // to store value, index pair

    for(let i = 0; i< nums.length; i++){
        let complement = target - nums[i];
        if(map.has(complement)) return [map.get(complement), i]
        
        map.set(nums[i],i);
    }

    return [-1,-1];
};
// @lc code=end

