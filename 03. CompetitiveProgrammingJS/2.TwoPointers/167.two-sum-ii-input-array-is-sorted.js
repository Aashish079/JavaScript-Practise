/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// O(n2)
// var twoSum = function(numbers, target) {
//     let indexarr = [];

//     for(let j=0; j<numbers.length; j++){
//         num1 = numbers[j];
//         for(let i = 0; i<numbers.length; i++){
//             num2 = numbers[numbers.length-i-1]
//             console.log(num1, num2)
//             if((num1+num2)==target){
//                 indexarr.push(j+1);
//                 indexarr.push(numbers.length - i);

//                 return indexarr;
//             }
//         }
//     }
//     return indexarr;
// };
// let result = twoSum([2,7,11,15], 9);
// console.log(result);

var twoSum = function(numbers, target){

    let left = 0;
    let right = numbers.length - 1;

    while(left<right){
        const sum = numbers[left] + numbers[right];
        if(sum === target) return [left+1, right+1];
        if(sum < target) left ++;
        else right--;
    }
    return[];
}
// @lc code=end

